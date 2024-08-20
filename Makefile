up:
	docker compose -f docker-compose.dev.yml up

build:
	docker compose -f docker-compose.dev.yml up --build

serve:
	npm run dev