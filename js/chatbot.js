const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
var nameForm = document.getElementById("name-form");
var nameInput = document.getElementById("name-input");
var welcomeMessage = document.getElementById("welcome-message");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".btn");
const startChatBtn = document.getElementById('startchatbtn'); // زر الدخول


// الترحيب 

function enterChat() {
    chatform.style.display="none";
    chatbox.style.display="block";
    chattext.style.display="flex";

    const userName = nameInput.value.trim();

    if (userName) {
        showWelcomeMessage(userName);
        chatform.style.display = "none";
        chatbox.style.display = "block";
        chattext.style.display = "flex";
        optionsContainer.classList.add('active');
    }
}
function showWelcomeMessage(name) {
    const welcomeMessage = `مرحبًا ${name}!  كيف يمكنني مساعدتك؟`;
    createAndAppendMessage(welcomeMessage, "incoming");
}
function createAndAppendMessage(message) {
    const incomingChatLi = createChatLi(message, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

// enter 

nameInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
    enterChat();
    }
});

// menu 

document.addEventListener('DOMContentLoaded', function () {
    const listoption = document.getElementById('listoption');
    
    listoption.addEventListener('click', function () {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
    });
});




let userMessage = null;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span><img src="./image/BOT.png"></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

// reply auto

  // دالة إنشاء وإضافة الرسائل إلى واجهة الدردشة
    function createAndAppendMessage(userMessage) {
    const incomingChatLi = createChatLi(userMessage, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    if (type === "outgoing") {
    const botResponse = getAutoBotResponse(userMessage);
    setTimeout(() => {
        createAndAppendMessage(botResponse, "incoming");
    }, 1000);
    }
}
// 

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");
    const options = ["ما هو برنامج الكيمياء التطبيقية الصناعية؟", "شروط التقديم لبرنامج الكيمياء التطبيقية الصناعية؟", "أين مكان التقديم؟","ما الذي يقدمه البرنامج؟","للمزيد تواصل معنا"];
    const containerId = "list";
    const container = document.getElementById(containerId);

    messageElement.textContent = "عفوا لم افهم سؤالك , اختر من القائمة ";
    container.style.display = "block"; // عرض الخيارات
    listoption.style.display = 'block'; // عرض زر القائمه

    createQuickReplyButtons(options, container);
}

function createQuickReplyButtons(options, container) {
    container.innerHTML = ""; // تفريغ أي أزرار موجودة سابقاً

    options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => handleOptionClick(option, container));
    container.appendChild(button);
    list.style.display = 'none';

});
}

function toggleOptions(container) {
    container.classList.toggle("active");
}

function handleOptionClick(option, container) {
    toggleOptions(container);
    
    const userChatLi = createChatLi(option, "outgoing");
    chatbox.appendChild(userChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
    const botResponse = getAutoBotResponse(option);
    const incomingChatLi = createChatLi(botResponse, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 1000);
}


function getAutoBotResponse(option) {
    if (option === "ما هو برنامج الكيمياء التطبيقية الصناعية؟") {
    return "یعد علم الكیماء الصناعیة من أھم العلوم المختلفة التي تخدم الإنسان بشتى التطبیقات الحیاتیة الیومیة بدایة من غذاء الإنسان، دھانات المنازل والسیارات والكھرباء وبطاریات السیارات وتطبیقات المیاه ومواد البناء والبتروكیماویات والمنظفات والمطھرات والعطور والأدویة والمبیدات الحشریة وملوثات الھواء والماء والتربة، ویتضح مما سبق أن ھناك حاجة ملحة لإنشاء واطلاق برنامج بكالوریوس للكیمیاء التطبیقیة الصناعیة بكلیة العلوم جامعة الزقازیق لسد الفجوة بین ما ھو موجود حالیا ما ھو مأمول، حیث من المأمول إعداد خریج قادر علي أن یطلق مشروعه بنفسه من خلال الصناعات الكیمیائیة المختلفة في مجال الدھانات والبویات والمنظفات والمطھرات و غیرھا.تسعى كلیة العلوم – جامعة الزقازیق ان تكون رائدة ومتمیزة من خلال تقدیم برنامج الكیمیاء التطبیقیة الصناعیة التقني لتلبیة احتیاجات سوق العمل وخدمة المجتمع وتنمیة البیئة محلیا واقلیمیا و دولیا.یھدف البرنامج إلي ابتكار إطار علمي متمیز لاكساب الطلاب المعلومات والتطبیقات اللازمة عن علوم الكیمیاء التطبیقیة الصناعیة وفق معاییر الجودة، وإعداد خریجین ذوي مھارات ذھنیة ومھنیة یمكن تطبیقھا في مجال الصناعات الحدیثة المتعددة،ملتزمین بأخلاقیات المھنة و لھم قدرة على المنافسة و التطویر في سوق العمل. ویمنح البرنامج درجة البكالوریوس في علوم الكیمیاء التطبیقیة الصناعیةمن كلیة العلوم – جامعة الزقازیق طبقا لنظام الساعات المعتمدة    "
    } else if (option === "شروط التقديم لبرنامج الكيمياء التطبيقية الصناعية؟") {
    return "شرط ان يكون الطالب حاصلاً على مجموع الحد الأدنى لكلية علوم في جميع محافظات مصر , كما انه لا يشترط قبول طلبات تقليل الاغتراب";
    } else if (option === "أين مكان التقديم؟") {
    return "مبنى إدارة الكلية وحدة البرامج المميزه";
    } else if(option === "ما الذي يقدمه البرنامج؟"){
    return "بكالريوس الكيمياء التطبيقية الصناعية ويخرج طلاب علي دراية كبيرة بأغلب تطبيقات الكيمياء وصناعتها لقرائة المزيد زور صفحة عن القسم";
    }else if(option === "للمزيد تواصل معنا"){
    return"https://chat.whatsapp.com/GALA2Msrnep7TsSnbEyTAS";
    }else {
    return "هذا رد تلقائي من البوت بعد اختيار الزر.";
    }
};
// end auto

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;


    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Typing..", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 1000);
    
    // Clear the input textarea and set its height to default
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;

}


chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);

// end ali code 


// function showWelcomeMessage(name) {
//     welcomeMessage.textContent = "hello " + name + " How can i help you ..?";
// }

// // start 2

// // end 2

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));