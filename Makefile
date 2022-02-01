setup:
	@ echo "Installing frontend dependencies..."
	@ cd ./frontend && npm install
	@ echo "\n--------------------------------------------------------------"
	@ echo "Installing backend dependencies..."
	@ cd ./backend && npm install
	@ echo "\n--------------------------------------------------------------"
	@ echo "Run \n make db (to start the postgresSQL database) \n make migrate (to run prisma migration and seed db) \n make server (to start the nestjs server) \n make spa (to start the Vue SPA) "

spa:
	@ echo "Starting frontend App..."
	@ cd ./frontend && npm run serve

server:
	@ echo "Starting backend App..."
	@ cd ./backend && npm run dev
	
migrate:
	@ echo "Running Prisma Migration in the backend App..."
	@ cd ./backend && npx prisma migrate dev
	@ cd ./backend && npx prisma db seed

db:
	@ echo "Starting database container..."
	@ cd ./backend && docker-compose up --build

test:
	@ echo "Running backend Tests..."
	@ cd ./backend && npm run test:e2e2

stop_db:
	@ cd ./backend && docker-compose stop