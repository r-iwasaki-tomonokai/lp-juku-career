/**
 * 塾ステキャリアエージェントLP用JavaScriptファイル
 * Version: 1.0.0
 * Last Updated: 2023-12-20
 * 
 * 塾講師からのキャリアアップを支援するランディングページの動的機能
 */

document.addEventListener('DOMContentLoaded', function() {
    // FAQアコーディオン
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // スクロールアニメーション
    const fadeElements = document.querySelectorAll('.js-fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('is-visible');
            }
        });
    }
    
    // 初回ロード時にチェック
    checkFade();
    
    // スクロール時にチェック
    window.addEventListener('scroll', checkFade);
});
