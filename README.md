# CurrentAI

CurrentAI is a website that delivers recent AI news to its user. It aims to simplify the news to allow everyone to understand it and get started with AI.

## Project Links:
* **API Backend:** [Drupal](https://api.currentai.me/)
* **Frontend:** [CurrentAI](https://currentai.me/) 
* **DockerHub:** [Frontend Image](https://hub.docker.com/r/jayr4/is373_ai_news/tags)
* **Figma Design:** [Figma Design](https://www.figma.com/design/r7OgeZKi0L5AF9P7tkUdKe/IS373---AI-Website-Pages?node-id=0-1&p=f)

## Repository Description:
* Contains the frontend code (HTML, CSS, JS) for the website
* Integrates a CI/CD pipeline to automaticly deploy upon changes to the main branch:
  * The CI/CD workflow builds and pushes an updated Docker image to DockerHub
  * These changes are monitored on the server using watchtower, ensuring the httpd frontend container is using the most recent version of the image