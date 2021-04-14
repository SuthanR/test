/// <reference types = "cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('visit google', () => {

    cy.visit('www.google.com')


})