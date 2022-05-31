"use strict";

(function () {

    const ulElem = document.getElementById("ulId")
    const ulAttributes = ulElem.attributes
    const arrAttrValue = []
    const arrAttributes = []

    for (let ulAttribute of ulAttributes) {
        let ulAttrValue = ulAttribute.value
        arrAttrValue.push(ulAttrValue)
        arrAttributes.push(ulAttribute)
    }

    const ulLastChild = ulElem.querySelector("ul li:last-child")
    ulLastChild.innerHTML = "Привет, меня зовут Alex"

    const ulFirstChild = ulElem.querySelector("ul li:first-child")
    ulFirstChild.setAttribute('data-my-name', "Alex")

    const ulDeleting = ulElem.removeAttribute("data-dog-tail")

    console.log(arrAttrValue)
    console.log(arrAttributes)
    console.log(ulLastChild)
    console.log(ulFirstChild)
})()