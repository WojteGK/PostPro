from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def index_page(self):
        self.client.get("/")

    @task
    def comment_section(self):
        self.client.get("/comment-section?postId=1")

    @task
    def post_display_settings(self):
        self.client.get("/post-display-settings")

    @task
    def post_section(self):
        self.client.get("/post-section")

    @task
    def navbar(self):
        self.client.get("/navbar")

    @task
    def random_page(self):
        self.client.get("/random-page")

