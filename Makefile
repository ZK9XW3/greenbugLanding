start: clean up

up:
	docker compose -f docker-compose.dev.yml up -d

down:
	docker compose -f docker-compose.dev.yml down
	#docker exec greenbug_landing rm -f /tmp/nitro/*.sock || true

build:
	docker compose -f docker-compose.dev.yml up --build

serve:
	npm run dev

node:
	docker exec -it greenbug_landing bash

clean:
	docker exec greenbug_landing rm -f /tmp/nitro/*.sock || true

restart: down clean up