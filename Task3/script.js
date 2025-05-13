const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 0
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "jQuery", "CSS"],
      answer: 2
    },
    {
      question: "Which is not a JavaScript Framework?",
      options: ["Python Script", "JQuery", "NodeJS"],
      answer: 0
    }
  ];

  let current = 0;
  let score = 0;

  function loadQuestion() {
    document.getElementById('result').innerText = '';
    const q = quizData[current];
    document.getElementById('question').innerText = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(i);
      optionsDiv.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    const correct = quizData[current].answer;
    if (selected === correct) {
      score++;
      document.getElementById('result').innerText = '✅ Correct!';
    } else {
      document.getElementById('result').innerText = '❌ Wrong!';
    }
  }

  function nextQuestion() {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById('quiz').innerHTML = `<h3>You scored ${score}/${quizData.length}</h3>`;
    }
  }

  loadQuestion();

  async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) return;
    const apiKey = "YOUR_API_KEY"; // Replace with valid API Key
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    if (data.cod === 200) {
      document.getElementById("weather").innerText = `${data.name}: ${data.main.temp}°C, ${data.weather[0].main}`;
    } else {
      document.getElementById("weather").innerText = "City not found!";
    }
  }

  async function getJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").innerText = `${data.setup} 😂 ${data.punchline}`;
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-img");
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }