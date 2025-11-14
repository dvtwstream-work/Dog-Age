function calculateAge() {
      const birthDate = new Date(document.getElementById("birthInput").value);
      const now = new Date();

      if (isNaN(birthDate.getTime())) {
        alert("請輸入有效的日期唷！");
        return;
      }

      // 狗狗實際歲數（以年為單位）
      const diffTime = now - birthDate;
      const dogYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

      // 人類換算歲數
      const humanYears = 16 * Math.log(dogYears) + 31;

      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML = `
        🐶 妙麗現在大約 <strong>${dogYears.toFixed(2)}</strong> 歲<br>
        👨‍🦳 換算成人類的年齡則約為 <strong>${humanYears.toFixed(2)}</strong> 歲
      `;
    }