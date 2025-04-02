const defaultSubjects = 6;

function createTerm(termNumber) {
    let subjects = "";
    for (let i = 1; i <= defaultSubjects; i++) {
        subjects += createSubjectRow(i);
    }

    return `
        <div class="banner-bar term slide-in" id="term-${termNumber}">
            <div class="banner-Title">
                <h2 data-translate="termResult">نتيجة الفصل ${termNumber}</h2>
            </div>
            <div class="banner-container">
                <div class="banner-box">
                    <p data-translate="total">المجموع</p>
                    <h3 class="term-total">0</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="percentage">النسبة</p>
                    <h3 class="term-percentage">0.000%</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="grade">التقدير</p>
                    <h3 class="term-grade">-</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="points">النقاط</p>
                    <h3 class="term-points">0.00</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="hours">عدد الساعات</p>
                    <h3 class="term-hours">0</h3>
                </div>
            </div>
            <div class="row">
                <table class="table term-table">
                    <thead>
                        <tr>
                            <th data-translate="subjectName">اسم المقرر</th>
                            <th data-translate="hours">عدد الساعات</th>
                            <th data-translate="degree">الدرجة</th>
                            <th data-translate="points">النقاط</th>
                            <th data-translate="grade">التقدير</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${subjects}
                    </tbody>
                </table>
                <div class="Term-btn">
                    <span>
                        <a href="#" class="add-subject">
                          <i class="fas fa-plus" style="font-size: 16px;"></i>

                            <span data-translate="addSubject">أضف مادة</span>
                        </a>
                    </span>
                    <span>
                        <button class="delete-term btn btn-danger">
                           <i class="fas fa-trash icon-trash" style="font-size: 16px;"></i>
                            <span data-translate="deleteTerm">حذف الفصل</span>
                        </button>
                    </span>
                </div>
            </div>
        </div>`;
}

function createSubjectRow(subjectNumber) {
    return `
        <tr class="slide-in">
            <td>
                <input 
                    type="text" 
                    class="subject-name form-control" 
                    aria-label="اسم المقرر ${subjectNumber}" 
                    placeholder="مقرر ${String(subjectNumber).padStart(2, '0')}" 
                />
            </td>
            <td>
                <div class="banner-Inputbox">
                    <input 
                        type="text" 
                        class="subject-hour form-control" 
                        aria-label="عدد الساعات" 
                        placeholder="عدد الساعات" 
                    />
                    <span class="error-message"></span>
                </div>
            </td>
            <td>
                <div class="banner-Inputbox">
                    <input 
                        type="text" 
                        class="subject-degree form-control" 
                        aria-label="الدرجة" 
                        placeholder="الدرجة" 
                    />
                    <span class="error-message"></span>
                </div>
            </td>
            <td><label class="subject-point">0.00</label></td>
            <td>
                <select class="subject-rating form-control" aria-label="التقدير">
                    <option value="" data-translate="undefined">غير محدد</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </td>
            <td>
                <button class="delete-subject btn btn-danger" aria-label="حذف المادة">
                   <i class="fas fa-trash icon-trash" style="font-size: 16px;"></i>
                </button>
            </td>
        </tr>`;
}