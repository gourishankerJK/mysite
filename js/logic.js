	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 0;
	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll == 0) {
			body.classList.remove(scrollUp);
			return;
		}

		if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
			// down
			body.classList.remove(scrollUp);
			body.classList.add(scrollDown);
		} else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
			// up
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		lastScroll = currentScroll;
	});
	document.querySelector("#button").addEventListener("click", () => {
		document.querySelector("#form").style.display = "flex";
		if (document.querySelector(".flip-card-inner").style.transform == "rotateY(180deg)") {
			window.setTimeout(close, 2000)
		}
	});
	document.querySelector("#submit").addEventListener("click", (ev) => {
		let data = {
			firstname: document.querySelector("#fname").value,
			lastname: document.querySelector("#lname").value,
			email: document.querySelector("#email").value,
			date: document.querySelector("#date").value,
			time: document.querySelector("#time").value
		}
		html = "<p style ='display: flex align-text :center'>Hello, " + data.firstname + " your appointment has been fixed for " + data.time + "</p>" + "<h2>Thanks for visting</h2>"

		document.querySelector(".flip-card-back").innerHTML = html;
		if (data.firstname != "" && data.email != "" && data.date != "") {
			ev.preventDefault();
			document.forms[0].reset();
			console.log(JSON.stringify(data));
			document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)"
			window.setTimeout(close, 3000)
		}

	});

	(function() {
		// Cloud
		var cloud = document.querySelector("#cloud-container").cloneNode(true);
		cloud.id = "cloud-container2";
		document.querySelector("#head-section-bottom").append(cloud);
		// Flag
		var flag = document.querySelector("#flag").cloneNode(true);
		flag.id = "flag1"
		document.querySelector("#mountains").append(flag);
		//house
		var house = document.querySelector("#house").cloneNode(true);
		house.id = "house1";
		document.querySelector("#mountains").append(house);
		// Tree
		var i = 0;
		while (i < 7) {
			var tree = document.querySelector("#tree").cloneNode(true);
			if (0 <= i && i <= 2) {
				tree.querySelector("#leaves").style.borderBottomColor = "rgb(246,213,70)";
			} else if (3 <= i && i < 5) {
				tree.querySelector("#leaves").style.borderBottomColor = "rgb(244,160,160)";
			} else if (i == 5) {
				tree.querySelector("#leaves").style.borderBottomColor = "rgb(143,209,130)";
			} else {
				tree.querySelector("#leaves").style.borderBottomColor = "rgb(33,125,104)";
			}
			tree.id = "tree" + i
			tree.class = "trees";
			tree.style.position = "absolute";
			document.querySelector("#mountains").append(tree);
			i += 1;
		}
		// boy
		var boy = document.querySelector("#background-circle").cloneNode(true);
		boy.id = "boy-intro";
		boy.class = "cartoon";
		document.querySelector("#body-section-content-1").prepend(boy);
		var boy1 = document.querySelector("#background-circle").cloneNode(true);
		boy1.id = "boy1";
		boy1.class = "cartoon";
		var node1 = document.querySelector("#line-abilites");
		document.querySelector("#design .paragraph").insertAdjacentElement("BeforeBegin", boy1);
		var boy2 = document.querySelector("#background-circle").cloneNode(true);
		boy2.id = "boy2";
		boy2.class = "cartoon";
		document.querySelector("#abilites").append(boy2);
	})();

	function close(event) {
		document.querySelector("#form").style.display = "none";
	}
	document.querySelector("#close").addEventListener("click", close);




	function traverse(element) {
		var n = element.childElementCount;
		for (var i = 0; i < n; i++) {
			if (i == 0) {
				console.log(element.firstElementChild);
				var x = element.firstElementChild;
				traverse(x);
			} else {
				console.log(x.nextElementSibling);
				x = x.nextElementSibling;
				traverse(x);
			}
		}
	}
	traverse(document);
