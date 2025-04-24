const responses = {
    "hi": "Hello! I'm the IILM Chatbot 🤖. Feel free to ask me anything about the university.",
    "admission": "You can apply online through the IILM University website. Admissions are open for all undergraduate and postgraduate programs.",
    "fees": "Please specify the course you're interested in. For example, 'BBA fee structure'.",
    "scholarship": "IILM offers various scholarships: Merit-based (up to 100%), Need-based, and Sports scholarships. Visit our scholarship page for full details.",
    "courses": "We offer programs in Management, Engineering, Law, Psychology, Design, and more. Let me know what field you're interested in!",
    "hostel": "Our hostels include fully-furnished rooms, Wi-Fi, mess, laundry, 24x7 security and recreational zones.",
    "contact": "Contact us at: admissions@iilm.edu or call +91-9876543210. Visit: IILM University, Greater Noida.",
    "placement": "Top recruiters include Deloitte, EY, KPMG, TCS. Average MBA CTC is ₹6 LPA. Internship support also provided.",
    "eligibility": "UG: 10+2 with 50%. PG: Graduation with 50%. Entrance test may be required for some courses.",
    "campus": "IILM has smart classrooms, computer labs, library, sports ground, auditorium, cafeterias, and innovation centers.",
    "faculty": "Our faculty includes PhDs, IIM graduates, and industry experts with global experience.",
    "deadlines": "Admissions open! Early round ends May, final deadline July 15th. Apply at admissions.iilm.edu.",
    "bba fee structure": "The BBA program fee at IILM University is ₹2,70,000 per year. Duration: 3 years. Scholarships available for eligible students.",
    "mba fee structure": "The MBA program costs ₹5,95,000 per year. Duration: 2 years. Includes international exposure and placement support.",
    "law fee structure": "BA LLB program costs ₹2,75,000 per year. Duration: 5 years. Facilities include moot court, internships, and legal aid center.",
    "b.tech cse fee structure": "B.Tech in Computer Science and Engineering is ₹1,90,000 per year. Duration: 4 years. State-of-the-art labs and experienced faculty included.",
    "bca fee structure": "BCA program costs ₹1,84,000 per year. Duration: 3 years. Covers programming, database, and IT fundamentals.",
    "ba llb fee structure": "BA LLB (Hons.) program is ₹2,25,000 per year. Duration: 5 years. Strong focus on legal theory, practice, and moot courts."
  };
  
  function getBotResponse(input) {
    input = input.toLowerCase();
    for (let key in responses) {
      if (input.includes(key)) {
        return responses[key];
      }
    }
    return "Sorry, I couldn't find an answer to that. Please ask about admissions, scholarships, placements, etc.";
  }
  
  function appendMessage(text, sender) {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    document.getElementById("chatbox").appendChild(message);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
  }
  
  function handleUserInput(inputText) {
    if (inputText.trim() === "") return;
    appendMessage(inputText, "user");
    const response = getBotResponse(inputText);
    setTimeout(() => appendMessage(response, "bot"), 500);
    document.getElementById("textInput").value = "";
  }
  
  document.getElementById("buttonInput").onclick = () => {
    handleUserInput(document.getElementById("textInput").value);
  };
  
  document.getElementById("textInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleUserInput(this.value);
    }
  });
  
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      handleUserInput(btn.textContent);
    });
  });
  