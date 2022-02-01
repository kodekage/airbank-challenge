setup:
	@ echo "Installing frontend dependencies..."
	@ cd ./frontend && npm install
	@ cd ./frontend && cp .env.sample .env
	@ echo "\n--------------------------------------------------------------"
	@ echo "Installing backend dependencies..."
	@ cd ./backend && cp .env.sample .env
	@ cd ./backend && npm install
	@ echo "\n--------------------------------------------------------------"
	@ echo "Run \n make spa (to start the Vue SPA) \n make db (to start the postgresSQL database) \n make server (to start the nestjs server)"

spa:
	@ echo "Starting frontend App..."
	@ cd ./frontend && npm run serve

server:
	@ echo "Staring backend App..."
	@ cd ./backend && npx prisma migrate dev
	@ cd ./backend && npx prisma db seed
	@ cd ./backend && npm run dev
	

db:
	@ echo "Starting database container..."
	@ cd ./backend && docker-compose up --build

stop_db:
	@ cd ./backend && docker-compose stop