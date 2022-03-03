function showList(petType) {
    $.ajax({
        url: 'data/members.csv',
        dataType: "text"
    }).done(function (raw) {

        const data = Papa.parse(raw.trim(), {header: true}).data;
        console.log(data);

        const memberListRoot = document.querySelector("#member_list");
        memberListRoot.innerHTML = "";

        data.forEach(member => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            memberListRoot.appendChild(li);

            const rowDiv = document.createElement("div");
            li.appendChild(rowDiv);
            if (document.getElementById(member.pet).checked) {
                rowDiv.className = "gold_bg row"
            } else {
                rowDiv.className = "row";
            }

            const imgDiv = document.createElement("div");
            imgDiv.className = "col-md-3";
            rowDiv.appendChild(imgDiv);

            const infoDiv = document.createElement("div");
            infoDiv.setAttribute("class", "col-md-9");
            rowDiv.appendChild(infoDiv);

            const img = document.createElement("img");
            img.setAttribute("src", member.picture);
            img.setAttribute("alt", "member poster " + member.first_name)
            imgDiv.appendChild(img);

            const nameText = document.createElement("h1");
            nameText.innerText = member.first_name + ' ' + member.last_name;
            nameText.className = "name_text";
            infoDiv.appendChild(nameText);

            const majorText = document.createElement("h5");
            majorText.style.marginTop = ("2rem")
            majorText.innerText = member.major;
            majorText.className = "main_text";
            infoDiv.appendChild(majorText);

            const emailText = document.createElement("h5");
            emailText.style.marginTop = ("2rem")
            emailText.innerText = member.email;
            emailText.className = "main_text";
            infoDiv.appendChild(emailText);

            const addressText = document.createElement("h5");
            addressText.style.marginTop = ("2rem")
            addressText.innerText = member.address;
            addressText.className = "main_text";
            infoDiv.appendChild(addressText);

            const petImg = document.createElement("img");
            petImg.style.marginTop = ("2rem")
            petImg.className = "pet_img";
            petImg.setAttribute("src", "img/" + member.pet + ".svg");
            petImg.setAttribute("alt", "pet poster " + member.pet)
            infoDiv.appendChild(petImg);
        });


        const allmembers = document.querySelector("#member_list").children;

        for (let i = 0; i < allmembers.length; i++) {

            allmembers[i].addEventListener("click", () => {
                allmembers[i].classList.toggle('italic_text');
                console.log(allmembers[i]);
            });


        }


    });
}