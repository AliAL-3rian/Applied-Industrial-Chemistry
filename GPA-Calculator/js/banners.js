function createPreviousCumulativeBanner() {
    return `
        <div class="banner-bar previous-cumulative">
            <div class="banner-Title">
                <h2 data-translate="previousCumulative">بيانات التراكمي السابق</h2>
                <div class="tooltip">
                    <i class="fas fa-globe" style="font-size: 16px;"></i>
                    <span class="tooltip-text" data-translate="previousCumulativeTip">أدخل بياناتك التراكمية السابقة لتحديث المعدل الكلي</span>
                </div>
            </div>
            <div class="banner-box">
                <div class="banner-Inputbox">
                    <input 
                        type="text" 
                        class="previous-cumulative-percentage" 
                        placeholder="النسبة التراكمية السابقة" 
                        aria-label="النسبة التراكمية السابقة"
                    />
                    <span class="error-message"></span>
                </div>
                <div class="banner-Inputbox">
                    <input 
                        type="text" 
                        class="previous-cumulative-points" 
                        placeholder="النقاط التراكمية السابقة" 
                        aria-label="النقاط التراكمية السابقة"
                    />
                    <span class="error-message"></span>
                </div>
                <div class="banner-Inputbox">
                    <input 
                        type="text" 
                        class="previous-cumulative-hours" 
                        placeholder="عدد الساعات التراكمية السابقة" 
                        aria-label="عدد الساعات التراكمية السابقة"
                    />
                    <span class="error-message"></span>
                </div>
            </div>
        </div>`;
}

function createCumulativeTermBanner() {
    return `
        <div class="banner-bar cumulative-term">
            <div class="banner-Title">
                <h2 data-translate="cumulativeTerm">تراكمي الفصول</h2>
                <div class="tooltip">
                   <i class="fas fa-globe" style="font-size: 16px;"></i>
                    <span class="tooltip-text" data-translate="cumulativeTermTip">هذا القسم يعرض المعدل التراكمي الكلي بناءً على جميع الفصول</span>
                </div>
            </div>
            <div class="banner-container">
                <div class="banner-box">
                    <p data-translate="percentage">النسبة</p>
                    <h3 class="cumulative-term-percentage">0.000%</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="grade">التقدير</p>
                    <h3 class="cumulative-term-grade">-</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="points">النقاط</p>
                    <h3 class="cumulative-term-points">0.00</h3>
                </div>
                <div class="banner-box">
                    <p data-translate="hours">عدد الساعات</p>
                    <h3 class="cumulative-term-hours">0</h3>
                </div>
            </div>
        </div>`;
}