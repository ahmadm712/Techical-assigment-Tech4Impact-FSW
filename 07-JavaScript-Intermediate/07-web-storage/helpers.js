export function logInHandler(
  username,
  elDivUsername,
  elFormUsername,
  elUsername
) {
  elDivUsername.classList.remove("d-none");
  elFormUsername.classList.add("d-none");
  elUsername.innerHTML = username;
}

export function drawUserCard(elListUser, githubUsers, username, profil) {
  if (username !== "") {
    githubUsers.forEach((user) => {
      const elCardBody = document.createElement("div");
      elCardBody.classList.add("card-body");
      const elCardTitle = document.createElement("div");
      elCardTitle.classList.add("card-title");
      elCardTitle.innerHTML = user.login;
      const elCardButton = document.createElement("button");
      const elCol = document.createElement("div");
      elCol.classList.add("col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");
      const elCard = document.createElement("div");
      elCard.classList.add("card");
      const elCardImg = document.createElement("div");
      elCard.classList.add("card-img-top");
      elCard.setAttribute("src", user.avatar_url);

      const following = JSON.parse(profil);
      const alreadyFollow = following?.find((f) => f.id === user.id);
      if (alreadyFollow !== undefined) {
        elCardButton.classList.add(
          "follow-button",
          "btn",
          "btn-success",
          "w-100"
        );
        elCardButton.setAttribute("type", "button");
        elCardButton.setAttribute("data-id", user.id);
        elCardButton.innerHTML = "Unfollow";
      } else {
        elCardButton.classList.add(
          "follow-button",
          "btn",
          "btn-primary",
          "w-100"
        );
        elCardButton.setAttribute("type", "button");
        elCardButton.setAttribute("data-id", user.id);
        elCardButton.innerHTML = "Follow";
      }

      elCardBody.appendChild(elCardTitle);
      elCardBody.appendChild(elCardButton);
      elCard.appendChild(elCardBody);
      elCard.appendChild(elCardImg);
      elCol.appendChild(elCard);
      elListUser.appendChild(elCol);
    });
  }
}
