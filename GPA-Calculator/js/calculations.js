// متغير عالمي لتخزين نظام الدرجات المختار
let currentGradingSystem = localStorage.getItem("gradingSystem") || "4.0";

// دالة لتحديد التقدير والنقاط بناءً على النظام المختار
function getGradeDetails(degree) {
    let gradePoints = 0;
    let grade = "";

    if (currentGradingSystem === "4.0") {
        // نظام 4.0 (النظام الأصلي)
        if (degree >= 90) {
            gradePoints = 4.000;
            grade = "A+";
        } else if (degree >= 85) {
            gradePoints = 3.667;
            grade = "A";
        } else if (degree >= 80) {
            gradePoints = 3.333;
            grade = "B+";
        } else if (degree >= 75) {
            gradePoints = 3.000;
            grade = "B";
        } else if (degree >= 70) {
            gradePoints = 2.667;
            grade = "C+";
        } else if (degree >= 65) {
            gradePoints = 2.333;
            grade = "C";
        } else if (degree >= 60) {
            gradePoints = 2.000;
            grade = "D";
        } else {
            gradePoints = 0.000;
            grade = "F";
        }
    } else if (currentGradingSystem === "5.0") {
        // نظام 5.0 (نظام جديد)
        if (degree >= 95) {
            gradePoints = 5.000;
            grade = "A+";
        } else if (degree >= 90) {
            gradePoints = 4.500;
            grade = "A";
        } else if (degree >= 85) {
            gradePoints = 4.000;
            grade = "B+";
        } else if (degree >= 80) {
            gradePoints = 3.500;
            grade = "B";
        } else if (degree >= 75) {
            gradePoints = 3.000;
            grade = "C+";
        } else if (degree >= 70) {
            gradePoints = 2.500;
            grade = "C";
        } else if (degree >= 65) {
            gradePoints = 2.000;
            grade = "D";
        } else {
            gradePoints = 0.000;
            grade = "F";
        }
    }

    return { gradePoints, grade };
}

// دالة لتحويل التقدير إلى درجة بناءً على النظام المختار
function getDegreeFromGrade(grade) {
    if (currentGradingSystem === "4.0") {
        const gradeToDegreeMap = {
            "A+": 90,
            "A": 85,
            "B+": 80,
            "B": 75,
            "C+": 70,
            "C": 65,
            "D": 60,
            "F": 0
        };
        return gradeToDegreeMap[grade] || 0;
    } else if (currentGradingSystem === "5.0") {
        const gradeToDegreeMap = {
            "A+": 95,
            "A": 90,
            "B+": 85,
            "B": 80,
            "C+": 75,
            "C": 70,
            "D": 65,
            "F": 0
        };
        return gradeToDegreeMap[grade] || 0;
    }
    return 0;
}

function calculateSubjectPoints(row) {
    const degree = parseFloat(row.querySelector(".subject-degree").value) || 0;
    const hours = parseFloat(row.querySelector(".subject-hour").value) || 0;
    const { gradePoints } = getGradeDetails(degree);
    const subjectPoints = gradePoints * hours;

    row.querySelector(".subject-point").textContent = subjectPoints.toFixed(3);
    row.querySelector(".subject-rating").value = getGradeDetails(degree).grade;
}

function getTermGrade(percentage) {
    if (currentGradingSystem === "4.0") {
        if (percentage >= 90) return "A+";
        if (percentage >= 85) return "A";
        if (percentage >= 80) return "B+";
        if (percentage >= 75) return "B";
        if (percentage >= 70) return "C+";
        if (percentage >= 65) return "C";
        if (percentage >= 60) return "D";
        return "F";
    } else if (currentGradingSystem === "5.0") {
        if (percentage >= 95) return "A+";
        if (percentage >= 90) return "A";
        if (percentage >= 85) return "B+";
        if (percentage >= 80) return "B";
        if (percentage >= 75) return "C+";
        if (percentage >= 70) return "C";
        if (percentage >= 65) return "D";
        return "F";
    }
    return "F";
}

function calculateTermResults(termId) {
    const term = document.getElementById(`term-${termId}`);
    const rows = term.querySelectorAll("tbody tr");
    let totalPoints = 0;
    let totalHours = 0;
    let totalEarnedDegrees = 0;
    let totalMaxDegrees = 0;

    rows.forEach((row) => {
        const degree = parseFloat(row.querySelector(".subject-degree").value) || 0;
        const hours = parseFloat(row.querySelector(".subject-hour").value) || 0;
        const maxDegree = 100;

        if (degree > 0) {
            const { gradePoints } = getGradeDetails(degree);
            totalPoints += gradePoints * hours;
            totalEarnedDegrees += degree;
            totalMaxDegrees += maxDegree;
            totalHours += hours;
        }
    });

    const termGPA = totalHours > 0 ? (totalPoints / totalHours).toFixed(3) : 0;
    const percentage = totalMaxDegrees > 0 ? ((totalEarnedDegrees / totalMaxDegrees) * 100).toFixed(3) : 0;
    const termGrade = getTermGrade(percentage);

    term.querySelector(".term-points").textContent = termGPA;
    term.querySelector(".term-hours").textContent = totalHours.toFixed(2);
    term.querySelector(".term-total").textContent = totalEarnedDegrees.toFixed(2);
    term.querySelector(".term-percentage").textContent = `${percentage}%`;
    term.querySelector(".term-grade").textContent = termGrade;

    return { termGPA, totalPoints, totalHours, totalEarnedDegrees, percentage, termGrade };
}
function calculateCumulativeGPA() {
    const previousPercentage = parseFloat(document.querySelector(".previous-cumulative-percentage").value) || 0;
    const previousPoints = parseFloat(document.querySelector(".previous-cumulative-points").value) || 0;
    const previousHours = parseFloat(document.querySelector(".previous-cumulative-hours").value) || 0;

    let totalCurrentPoints = 0;
    let totalCurrentHours = 0;
    let totalWeightedPercentage = 0;

    const terms = document.querySelectorAll(".term");
    const termData = [];

    // جمع بيانات الفصول
    terms.forEach((term) => {
        const termGPA = parseFloat(term.querySelector(".term-points").textContent) || 0;
        const termHours = parseFloat(term.querySelector(".term-hours").textContent) || 0;
        const termPercentage = parseFloat(term.querySelector(".term-percentage").textContent) || 0;

        totalCurrentPoints += termGPA * termHours; // النقاط الكلية للفصل
        totalCurrentHours += termHours;
        totalWeightedPercentage += termPercentage * termHours; // النسبة المرجحة

        termData.push({ gpa: termGPA, hours: termHours });
    });

    // حساب النقاط الكلية (التراكمي السابق + الفصول الحالية)
    const previousTotalPoints = previousPoints * previousHours; // النقاط الكلية للتراكمي السابق
    const totalPoints = previousTotalPoints + totalCurrentPoints;
    const totalHours = previousHours + totalCurrentHours;

    // حساب المعدل التراكمي الكلي (بدون تقريب مبكر)
    const cumulativeGPA = totalHours > 0 ? totalPoints / totalHours : 0;

    // حساب النسبة المئوية التراكمية (مرجحة بعدد الساعات، بدون تقريب مبكر)
    const totalWeightedPercentageWithPrevious = (previousPercentage * previousHours) + totalWeightedPercentage;
    const cumulativePercentage = totalHours > 0 ? totalWeightedPercentageWithPrevious / totalHours : 0;
    const cumulativeGrade = getTermGrade(cumulativePercentage);

    // تحديث الـ DOM (التقريب فقط عند العرض)
    document.querySelector(".cumulative-term-percentage").textContent = `${cumulativePercentage.toFixed(3)}%`;
    document.querySelector(".cumulative-term-points").textContent = cumulativeGPA.toFixed(3);
    document.querySelector(".cumulative-term-hours").textContent = totalHours.toFixed(2);
    document.querySelector(".cumulative-term-grade").textContent = cumulativeGrade;

    return { cumulativeGPA, totalHours };
}