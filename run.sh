cd backend/api 
docker build -t cpantel/backend .
cd ..
cd ..

cd frontend
docker build -t cpantel/frontend .
cd ..

# levantar todo
#docker-compose  --file=docker-compose.backend.yml up
docker-compose up
