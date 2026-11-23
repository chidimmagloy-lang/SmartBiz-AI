// SMARTBIZ AI - BUSINESS ASSISTANT

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// CHAT FUNCTION
function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);

    const businessInfo = JSON.parse(localStorage.getItem("businessInfo") || "null");
   const response = getAIResponse(message, businessInfo);

    const aiMessage = document.createElement("p");
    aiMessage.textContent = "SMARTBIZ AI: " + response;
    chatBox.appendChild(aiMessage);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
// IMPROVED AI RESPONSES
function getAIResponse(message, businessInfo) {
    const text = message.toLowerCase();

    if (text.includes("market") || text.includes("advert")) {
      const businessName = businessInfo ? businessInfo.name : "your business"; 
        return `Here are 5 ways to promote ${businessName}
        Products: ${businessInfo ? businessInfo.product : "not provided"}

1. Identify your target customers.
2. Create attractive product packaging.
3. Advertise on WhatsApp, Facebook and Instagram.
4. Offer discounts to attract new customers.
5. Encourage satisfied customers to recommend your products.

SMARTBIZ AI TIP: Consistency is important for business growth.`;
    }

    if (text.includes("customer") || text.includes("reply")) {
     const businessName = businessInfo ? businessInfo.name : "your business";  
       return `Here are 5 ways to improve customer communication for ${businessName}:

1. Welcome customers politely.
2. Respond to enquiries quickly.
3. Provide clear product information.
4. Thank customers after every purchase.
5. Follow up to encourage repeat orders.

SMARTBIZ AI TIP: Good customer service builds trust.`;
    }

    if (text.includes("idea") || text.includes("business")) {
        return `Here are 5 ideas to grow your business:

1. Introduce new products.
2. Create attractive product packages.
3. Offer referral discounts.
4. Promote your products online.
5. Provide excellent customer service.

SMARTBIZ AI TIP: Understand your customers' needs.`;
    }

    if (text.includes("sales") || text.includes("profit")) {
        return `Here are 5 ways to improve your sales:

1. Record your daily sales.
2. Track your business expenses.
3. Calculate your profit regularly.
4. Identify your best-selling products.
5. Review your performance every month.

SMARTBIZ AI TIP: Good financial records help you make better decisions.`;
    }

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! Welcome to SMARTBIZ AI. How can I help your business today?";
    }

    return "Thank you for contacting SMARTBIZ AI. Please tell me more about your business so I can provide useful guidance.";
}

// SEND BUTTON
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// BUSINESS SERVICE BUTTONS

document.getElementById("marketing-btn").addEventListener("click", function() {
    userInput.value = "Help me create marketing content for my business.";
    sendMessage();
});

document.getElementById("customer-btn").addEventListener("click", function() {
    userInput.value = "Help me respond professionally to my customers.";
    sendMessage();
});

document.getElementById("ideas-btn").addEventListener("click", function() {
    userInput.value = "Give me new business ideas.";
    sendMessage();
});

document.getElementById("sales-btn").addEventListener("click", function() {
    userInput.value = "Help me understand my sales and profit.";
    sendMessage();
});
// SAVE BUSINESS INFORMATION

document.getElementById("save-business-btn").addEventListener("click", function() {

    const businessName = document.getElementById("business-name").value;
    const businessType = document.getElementById("business-type").value;
    const businessProduct = document.getElementById("business-product").value;
    const targetCustomers = document.getElementById("target-customers").value;

    if (!businessName || !businessType || !businessProduct || !targetCustomers) {
        alert("Please fill in all business information.");
        return;
    }

    const businessInfo = {
        name: businessName,
        type: businessType,
        product: businessProduct,
        customers: targetCustomers
    };

    localStorage.setItem("businessInfo", JSON.stringify(businessInfo));

    alert("Your business information has been saved successfully!");

});

// LOAD SAVED BUSINESS INFORMATION

const savedBusiness = JSON.parse(
    localStorage.getItem("businessInfo") || "null"
);

if (savedBusiness) {
    document.getElementById("business-name").value = savedBusiness.name || "";
    document.getElementById("business-type").value = savedBusiness.type || "";
    document.getElementById("business-product").value = savedBusiness.product || "";
    document.getElementById("target-customers").value = savedBusiness.customers || "";
}