(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Progress Bar
  $(".pg-bar").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav: false,
  });

  // Chart Global Color
  Chart.defaults.color = "#6C7293";
  Chart.defaults.borderColor = "#000000";

  // Worldwide Sales Chart
  var ctx1 = $("#worldwide-sales").get(0).getContext("2d");

  // Extracted data from Excel
  // Assuming "exerciseData" contains the JSON data
  var exerciseData = [
    { exercise_name: "Squats", angles_degrees: 90, ideal_right_angle: 87.5, posture_accuracy: 95 },
    { exercise_name: "Push-ups", angles_degrees: 45, ideal_right_angle: 45.0, posture_accuracy: 88 },
    { exercise_name: "Plank", angles_degrees: 180, ideal_right_angle: 180.0, posture_accuracy: 92 },
    { exercise_name: "Face pulls", angles_degrees: 60, ideal_right_angle: 87.5, posture_accuracy: 85 },
    { exercise_name: "Deadlift", angles_degrees: 80, ideal_right_angle: 127.5, posture_accuracy: 75 },
    { exercise_name: "Bench Press", angles_degrees: 90, ideal_right_angle: 82.5, posture_accuracy: 90 },
    { exercise_name: "Leg Press", angles_degrees: 60, ideal_right_angle: 112.5, posture_accuracy: 88 },
    { exercise_name: "Shoulder Press", angles_degrees: 70, ideal_right_angle: 105.0, posture_accuracy: 85 },
    { exercise_name: "Bicep Curl", angles_degrees: 90, ideal_right_angle: 82.5, posture_accuracy: 92 },
    { exercise_name: "Tricep Dips", angles_degrees: 100, ideal_right_angle: 95.0, posture_accuracy: 89 },
];

var ctx1 = document.getElementById("worldwide-sales").getContext("2d");
var ctx5 = document.getElementById("pie-chart").getContext("2d");

var currentIndex = 0;

function updateCharts() {
    var data = exerciseData[currentIndex];

    // Update Posture Accuracy Score Chart
    myChart1.data.labels = [data.exercise_name];
    myChart1.data.datasets[0].data = [data.ideal_right_angle];
    myChart1.data.datasets[1].data = [data.posture_accuracy];
    myChart1.update();

    // Update Pie Chart
    myChart5.data.labels = ["Measured Angle", "Ideal Right Angle"];
    myChart5.data.datasets[0].data = [data.angles_degrees, data.ideal_right_angle];
    myChart5.update();

    // Move to the next entry, loop back if at the end
    currentIndex = (currentIndex + 1) % exerciseData.length;
}

var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Correct Angle (Degrees)",
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [],
            },
            {
                label: "Posture Accuracy Score (Out of 100)",
                backgroundColor: "rgba(22, 160, 133, .7)",
                data: [],
            },
        ],
    },
    options: { responsive: true },
});

var myChart5 = new Chart(ctx5, {
    type: "pie",
    data: {
        labels: ["Measured Angle", "Ideal Right Angle"],
        datasets: [
            {
                backgroundColor: [
                    "rgba(235, 22, 22, .7)", // Red for actual angle
                    "rgba(22, 160, 133, .7)", // Green for ideal right angle
                ],
                data: [],
            },
        ],
    },
    options: { responsive: true },
});

// Update every 2 seconds
updateCharts();
setInterval(updateCharts, 2000);

  // Single Line Chart
  var ctx3 = $("#line-chart").get(0).getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      datasets: [
        {
          label: "Salse",
          fill: false,
          backgroundColor: "rgba(235, 22, 22, .7)",
          data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Single Bar Chart
  var ctx4 = $("#bar-chart").get(0).getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["Italy", "France", "Spain", "USA", "Argentina"],
      datasets: [
        {
          backgroundColor: [
            "rgba(235, 22, 22, .7)",
            "rgba(235, 22, 22, .6)",
            "rgba(235, 22, 22, .5)",
            "rgba(235, 22, 22, .4)",
            "rgba(235, 22, 22, .3)",
          ],
          data: [55, 49, 44, 24, 15],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Pie Chart
  var ctx5 = $("#pie-chart").get(0).getContext("2d");
  var myChart5 = new Chart(ctx5, {
    type: "pie",
    data: {
      labels: ["Italy", "France", "Spain", "USA", "Argentina"],
      datasets: [
        {
          backgroundColor: [
            "rgba(235, 22, 22, .7)",
            "rgba(235, 22, 22, .6)",
            "rgba(235, 22, 22, .5)",
            "rgba(235, 22, 22, .4)",
            "rgba(235, 22, 22, .3)",
          ],
          data: [55, 49, 44, 24, 15],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Doughnut Chart
  var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
  var myChart6 = new Chart(ctx6, {
    type: "doughnut",
    data: {
      labels: ["Italy", "France", "Spain", "USA", "Argentina"],
      datasets: [
        {
          backgroundColor: [
            "rgba(235, 22, 22, .7)",
            "rgba(235, 22, 22, .6)",
            "rgba(235, 22, 22, .5)",
            "rgba(235, 22, 22, .4)",
            "rgba(235, 22, 22, .3)",
          ],
          data: [55, 49, 44, 24, 15],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})(jQuery);
