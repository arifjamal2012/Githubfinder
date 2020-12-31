const github = new Github();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

function userInput() {
	const userText = searchUser.value;
	if (userText !== '') {
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		ui.clearProfile();
	}
}

searchUser.addEventListener('keyup', userInput);
