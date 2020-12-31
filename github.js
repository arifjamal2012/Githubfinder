class Github {
	constructor() {
		this.client_id = '302b491c1458b2b7bcdc';
		this.client_secret = 'a3648992bd4eec37f1a65ec0fa216cdc4236441b';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&clinet_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
