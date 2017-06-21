b:
	sudo docker-compose build

ud:
	sudo docker-compose up

c:
	sudo rm -rf app/node/node_modules && \
	sudo rm -rf app/react/node_modules && \
	sudo rm -rf app/react/static

w:
	sudo docker-compose exec front webpack --watch