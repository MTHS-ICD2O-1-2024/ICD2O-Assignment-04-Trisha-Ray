// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const TAX_RATE = 0.13

  // donut quantity
  let donutChoice = ""
  let donutPrice = 0

  if (document.getElementById("amount").checked) {
    donutChoice = "3"
    donutPrice = 5.0
  } else if (document.getElementById("amounttwo").checked) {
    donutChoice = "6"
    donutPrice = 9.0
  } else if (document.getElementById("amountthree").checked) {
    donutChoice = "9"
    donutPrice = 12.0
  } else if (document.getElementById("amountfour").checked) {
    donutChoice = "12"
    donutPrice = 14.0
  }

  // flavour
  let flavourChoice = ""
  let flavourPrice = 0

  if (document.getElementById("flavour-1").checked) {
    flavourChoice = "Chocolate"
    flavourPrice = 0.7
  } else if (document.getElementById("flavour-2").checked) {
    flavourChoice = "Strawberry"
    flavourPrice = 0.8
  } else if (document.getElementById("flavour-3").checked) {
    flavourChoice = "Vanilla"
    flavourPrice = 0.5
  }

  // totals
  const subtotal = donutPrice + flavourPrice
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  // output
  if (donutChoice != "" && flavourChoice != "") {
    document.getElementById("results").innerHTML =
      "<p>Subtotal: $" + subtotal + "<br>Tax: $" + tax + "<br>Total: $" + total + "</p>"
  } else {
    document.getElementById("results").innerHTML =
      "<p>Please select both the amount and flavour of donuts, you haven't done that yet!</p>"
  }
}