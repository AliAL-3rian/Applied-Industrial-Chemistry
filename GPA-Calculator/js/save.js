function exportToPDF() {
    const exportButton = document.getElementById("export-pdf");
    exportButton.classList.add("loading");
    exportButton.disabled = true;

    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");

        // اللغة والترجمة
        const cumulativeTitle = translations[currentLang].cumulativeTerm || "Cumulative Results";
        const termTitle = translations[currentLang].termResult || "Term Results";
        const previousCumulativeTitle = translations[currentLang].previousCumulative || "Previous Cumulative";
        const subjectDetailsTitle = translations[currentLang].subjectDetails || "Subject Details";

        // رؤوس الجداول
        const previousCumulativeHeaders = [
            translations[currentLang].percentage || "Percentage",
            translations[currentLang].points || "Points",
            translations[currentLang].hours || "Hours"
        ];
        const cumulativeHeaders = [
            translations[currentLang].percentage || "Percentage",
            translations[currentLang].grade || "Grade",
            translations[currentLang].points || "Points",
            translations[currentLang].hours || "Hours"
        ];
        const termHeaders = [
            translations[currentLang].total || "Total",
            translations[currentLang].percentage || "Percentage",
            translations[currentLang].grade || "Grade",
            translations[currentLang].points || "Points",
            translations[currentLang].hours || "Hours"
        ];
        const subjectHeaders = [
            translations[currentLang].subjectName || "Subject Name",
            translations[currentLang].hours || "Hours",
            translations[currentLang].degree || "Degree",
            translations[currentLang].rating || "Rating"
        ];

        // جمع البيانات من localStorage
        const savedData = JSON.parse(localStorage.getItem("gpaData")) || { terms: [], previousCumulative: {} };
        const terms = savedData.terms || [];
        const previousCumulative = savedData.previousCumulative || {};

        // حساب المعدل التراكمي الكلي
        let totalPoints = 0;
        let totalHours = 0;

        // إضافة المعدل التراكمي السابق إذا كان موجودًا
        if (previousCumulative.points && previousCumulative.hours) {
            const prevPoints = parseFloat(previousCumulative.points) || 0;
            const prevHours = parseFloat(previousCumulative.hours) || 0;
            totalPoints += prevPoints * prevHours;
            totalHours += prevHours;
        }

        // جمع نقاط وعدد ساعات الفصول
        terms.forEach(term => {
            const termElement = document.getElementById(`term-${term.termId}`);
            if (termElement) {
                const termPoints = parseFloat(termElement.querySelector(".term-points")?.textContent) || 0;
                const termHours = parseFloat(termElement.querySelector(".term-hours")?.textContent) || 0;
                totalPoints += termPoints * termHours;
                totalHours += termHours;
            }
        });

        // حساب المعدل التراكمي الكلي
        const cumulativeGPA = totalHours > 0 ? (totalPoints / totalHours).toFixed(3) : "N/A";
        const cumulativeHours = totalHours.toFixed(2);
        const cumulativePercentage = document.querySelector(".cumulative-term-percentage")?.textContent.trim() || "N/A";
        const cumulativeGrade = document.querySelector(".cumulative-term-grade")?.textContent.trim() || "N/A";

        // 1. جدول المعدل التراكمي السابق (إذا كان موجودًا)
        let startY = 10;
        if (previousCumulative.points || previousCumulative.hours) {
            pdf.setFontSize(18);
            pdf.text(previousCumulativeTitle, 105, startY, { align: "center" });

            const previousCumulativeData = [
                [
                    previousCumulative.percentage || "N/A",
                    previousCumulative.points || "N/A",
                    previousCumulative.hours || "N/A"
                ]
            ];

            pdf.autoTable({
                head: [previousCumulativeHeaders],
                body: previousCumulativeData,
                startY: startY + 10,
                theme: "grid",
                styles: { halign: "center" },
                headStyles: { fillColor: [0, 102, 204] },
            });
            startY = pdf.autoTable.previous.finalY + 10;
        }

        // 2. جدول المعدل التراكمي الكلي
        pdf.setFontSize(18);
        pdf.text(cumulativeTitle, 105, startY, { align: "center" });

        const cumulativeData = [
            [
                cumulativePercentage,
                cumulativeGrade,
                cumulativeGPA,
                cumulativeHours
            ]
        ];

        pdf.autoTable({
            head: [cumulativeHeaders],
            body: cumulativeData,
            startY: startY + 10,
            theme: "grid",
            styles: { halign: "center" },
            headStyles: { fillColor: [0, 102, 204] },
        });

        // 3. جدول نتائج الفصول
        startY = pdf.autoTable.previous.finalY + 10;
        pdf.setFontSize(18);
        pdf.text(termTitle, 105, startY, { align: "center" });

        const termData = [];
        document.querySelectorAll(".term").forEach((term) => {
            termData.push([
                term.querySelector(".term-total")?.textContent.trim() || "N/A",
                term.querySelector(".term-percentage")?.textContent.trim() || "N/A",
                term.querySelector(".term-grade")?.textContent.trim() || "N/A",
                term.querySelector(".term-points")?.textContent.trim() || "N/A",
                term.querySelector(".term-hours")?.textContent.trim() || "N/A",
            ]);
        });

        pdf.autoTable({
            head: [termHeaders],
            body: termData,
            startY: startY + 10,
            theme: "grid",
            styles: { halign: "center" },
            headStyles: { fillColor: [0, 102, 204] },
        });

        // 4. جدول تفاصيل المواد لكل فصل
        terms.forEach((term, index) => {
            startY = pdf.autoTable.previous.finalY + 10;
            pdf.setFontSize(16);
            pdf.text(`${subjectDetailsTitle} - ${translations[currentLang].term || "Term"} ${index + 1}`, 105, startY, { align: "center" });

            const subjectData = term.subjects.map(subject => [
                subject.name || "N/A",
                subject.hours || "N/A",
                subject.degree || "N/A",
                subject.rating || "N/A"
            ]);

            pdf.autoTable({
                head: [subjectHeaders],
                body: subjectData,
                startY: startY + 10,
                theme: "grid",
                styles: { halign: "center" },
                headStyles: { fillColor: [0, 102, 204] },
            });
        });

        // إضافة تذييل
        pdf.setFontSize(10);
        pdf.text("تم إنشاء هذا التقرير بواسطة حاسبة المعدل التراكمي", 105, pdf.internal.pageSize.height - 10, { align: "center" });

        // حفظ الملف
        pdf.save("Cumulative_and_Term_Results.pdf");
        showToast(translations[currentLang].exportSuccess || "Data saved as PDF successfully!", "success");

        exportButton.classList.remove("loading");
        exportButton.disabled = false;
    }, 500);
}

function shareResults() {
    const cumulativeGPA = document.querySelector(".cumulative-term-points").textContent;
    const cumulativeGrade = document.querySelector(".cumulative-term-grade").textContent;
    const shareText = `${translations[currentLang].shareMessage || "My Cumulative GPA Results:"}\n${translations[currentLang].points || "Points"}: ${cumulativeGPA}\n${translations[currentLang].grade || "Grade"}: ${cumulativeGrade}`;

    if (navigator.share) {
        navigator.share({
            title: translations[currentLang].title || "GPA Calculator",
            text: shareText,
        }).catch((error) => {
            console.error("Share failed:", error);
            showToast(translations[currentLang].shareError || "Failed to share results", "error");
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast(translations[currentLang].copySuccess || "Results copied to clipboard!", "success");
        });
    }
}

function autoSave() {
    const terms = [];
    document.querySelectorAll(".term").forEach((term) => {
        const termId = term.id.split("-")[1];
        const subjects = [];
        term.querySelectorAll("tbody tr").forEach((row) => {
            subjects.push({
                name: row.querySelector(".subject-name").value,
                hours: row.querySelector(".subject-hour").value,
                degree: row.querySelector(".subject-degree").value,
                rating: row.querySelector(".subject-rating").value,
            });
        });
        terms.push({ termId, subjects });
    });

    const previousCumulative = {
        percentage: document.querySelector(".previous-cumulative-percentage").value,
        points: document.querySelector(".previous-cumulative-points").value,
        hours: document.querySelector(".previous-cumulative-hours").value,
    };

    localStorage.setItem("gpaData", JSON.stringify({ terms, previousCumulative }));
}

function loadAutoSavedData() {
    const savedData = localStorage.getItem("gpaData");
    if (savedData) {
        const data = JSON.parse(savedData);
        document.querySelector(".previous-cumulative-percentage").value = data.previousCumulative.percentage || "";
        document.querySelector(".previous-cumulative-points").value = data.previousCumulative.points || "";
        document.querySelector(".previous-cumulative-hours").value = data.previousCumulative.hours || "";

        const termsContainer = document.getElementById("terms-container");
        termsContainer.innerHTML = "";
        data.terms.forEach((termData) => {
            const termElement = createTerm(termData.termId);
            termsContainer.insertAdjacentHTML("beforeend", termElement);
            const term = document.getElementById(`term-${termData.termId}`);
            const tbody = term.querySelector("tbody");
            tbody.innerHTML = "";
            termData.subjects.forEach((subject, index) => {
                const row = createSubjectRow(index + 1);
                tbody.insertAdjacentHTML("beforeend", row);
                const newRow = tbody.lastElementChild;
                newRow.querySelector(".subject-name").value = subject.name || "";
                newRow.querySelector(".subject-hour").value = subject.hours || "";
                newRow.querySelector(".subject-degree").value = subject.degree || "";
                newRow.querySelector(".subject-rating").value = subject.rating || "";
            });
        });

        reassignTermNumbers();
        calculateCumulativeGPA();
    }
}