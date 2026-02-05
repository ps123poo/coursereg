function registerCourse() {

    const dashboard = document.querySelector(".dashboard-box");
    const selectedSlot = document.querySelector('input[name="slot"]:checked');

    if (!selectedSlot) {
        alert("Please select a slot");
        return;
    }

    const row = selectedSlot.closest("tr");

    const courseData = {
        code: dashboard.dataset.code,
        title: dashboard.dataset.title,
        type: dashboard.dataset.type,
        credits: Number(dashboard.dataset.credits),
        slot: row.children[0].innerText,
        faculty: row.children[2].innerText
    };

    let registeredCourses =
        JSON.parse(localStorage.getItem("registeredCourses")) || [];

    // Prevent duplicate course
    const alreadyRegistered = registeredCourses.some(
        course => course.code === courseData.code
    );

    if (alreadyRegistered) {
        alert("Course already registered!");
        return;
    }

    registeredCourses.push(courseData);

    localStorage.setItem(
        "registeredCourses",
        JSON.stringify(registeredCourses)
    );

    alert("Course registered successfully!");

    window.location.href = "home.html";
}
