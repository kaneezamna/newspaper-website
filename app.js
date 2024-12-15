const read1 = document.getElementById("read1");
const text1 = document.getElementById("text1");
const read2 = document.getElementById("read2");
const text2 = document.getElementById("text2");
const read3 = document.getElementById("read3");
const text3 = document.getElementById("text3");
const read4 = document.getElementById("read4");
const text4 = document.getElementById("text4");

read1.onclick = () => {
    if (text1.style.display === "none") {
      text1.style.display = "inline"; // Show the extra content
      read1.textContent = "Read Less"; // Change link text
    } else {
      text1.style.display = "none"; // Hide the extra content
      read1.textContent = "Read More"; // Reset link text
    }
  };

  
read2.onclick = () => {
    if (text2.style.display === "none") {
      text2.style.display = "inline"; // Show the extra content
      read2.textContent = "Read Less"; // Change link text
    } else {
      text2.style.display = "none"; // Hide the extra content
      read2.textContent = "Read More"; // Reset link text
    }
  };

  
read3.onclick = () => {
    if (text3.style.display === "none") {
      text3.style.display = "inline"; // Show the extra content
      read3.textContent = "Read Less"; // Change link text
    } else {
      text3.style.display = "none"; // Hide the extra content
      read3.textContent = "Read More"; // Reset link text
    }
  };

  
read4.onclick = () => {
    if (text4.style.display === "none") {
      text4.style.display = "inline"; // Show the extra content
      read4.textContent = "Read Less"; // Change link text
    } else {
      text4.style.display = "none"; // Hide the extra content
      read4.textContent = "Read More"; // Reset link text
    }
  };