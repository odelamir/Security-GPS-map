// Import the image

import image from "/Users/Amirg/שולחן העבודה/project-/project/src/images/תמונה.png";
import "./homePageStyle.css"; // Using the same CSS file for consistency

// Define the About component
export default function About() {
    return (
        <div className="home-page">
            <div className="content">
                <img src={image} alt="Descriptive Alt Text" className="content-image"/>
                <h1 className="main-title">מערכת חץ קליעים</h1>
                <p className="description-text">מערכת חץ קליעים היא מערכת המיירטת קליעים ורימונים בשטח קרב, המערכת עובדת ב-3 שלבים עיקריים:</p>
                <ol className="description-text">
                    <li>קליטת איומים - המערכת קולטת איומים ב-360 מעלות בסביבת החייל באמצעות סנסורים מתקדמים.</li>
                    <li>שערוך מסלול - המערכת משערכת במהירות מסלול עתידי של האיומים שמתקבלים, המערכת מבצעת זאת באמצעות שיטת הוספת כוחות בפיזיקה, שע"פ שיטה זו מתקבל הנקודה הראשונה במסלול וכן הכוחות הפיזיקאליים המשפיעים על מסלול הגוף החופשי של הקליע. ע"פ נתונים אלו המערכת מבצעת סימולציית חישוב כוחות מהירה ומשערכת אם המסלול מהווה סכנה לחייל.</li>
                    <li>במידה והמסלול מסכן את החייל, המערכת מיירטת את האיום בנקודה השלישית של חישוב הכוחות.</li>
                </ol>
                <p className="description-text">המערכת מציגה הדמיה תלת מימדית של סביבת החייל עם איומים שמתקבלים מהסנסור. המערכת מציגה את מסלול האיומים כפי שמתרחשים בזמן אמת, ובמידת הצורך המערכת מבצעת יירוט כך שהאיום לא יהווה סכנה ללוחם.</p>
                <p className="description-text">המערכת מציגה בשידור חי את מיקומי האיומים המתקבלים מסביבת החייל ומהווים סכנה עבור הלוחם, המערכת מבצעת זאת על ידי סימונם במפת גוגל ביטחונית שתשמש כוחות ביטחון, חיילים וטייסים.</p>
            </div>
        </div>
    );
}
