MAKEFILE_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
PJ_NAME := `basename ${MAKEFILE_DIR}`

.PHONY: open
open:
	devcontainer open .

.PHONY: remove
remove:
	docker compose -p $(PJ_NAME) -f ./.devcontainer/docker-compose.yml down --rmi all --remove-orphans && docker volume rm $(PJ_NAME)_node_modules

.PHONY: destroy
destroy:
	docker compose -p $(PJ_NAME) -f ./.devcontainer/docker-compose.yml down --rmi all --volumes --remove-orphans

.PHONY: refresh
refresh:
	@make remove
	@make open

.PHONY: rebuild
rebuild:
	@make destroy
	@make open

.PHONY: bash
bash:
	docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml exec node bash

.PHONY: bash-root
bash-root:
	docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml exec -u 0 node bash

.PHONY: logs
logs:
	docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml logs