up:
	docker compose -f docker-compose.dev.yml up -d

build:
	docker compose -f docker-compose.dev.yml up --build

serve:
	npm run dev

node:
	docker exec -it greenbug_landing bash