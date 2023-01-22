'''
Author : Padmapriya Dasarathy (priya@manizh.com)
Version : 1.0
Date : 2021-01-09
Description : This test case is to check responsiveness of the website bigtincan and in particular for the Client Sanofi using 
Lemoncheesecake framework
'''

import lemoncheesecake.api as lcc
from lemoncheesecake.matching import *
from lemoncheesecake_selenium import Selector, save_screenshot, is_in_page
import unittest
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.ui import Select

import logging
import time
from time import sleep
import os.path as osp
import json
import csv

@lcc.suite()
class Test_Responsive_Sabic:
    def delete_cache(self,driver):
        driver.execute_script("window.open('')")  # Create a separate tab than the main one
        driver.switch_to.window(driver.window_handles[-1])  # Switch window to the second tab
        driver.get('chrome://settings/clearBrowserData')  # Open your chrome settings.
        self.perform_actions(driver, Keys.TAB * 2 + Keys.DOWN * 4 + Keys.TAB * 5 + Keys.ENTER)  # Tab to the time select and key down to say "All Time" then go to the Confirm button and press Enter
        sleep(5)
        driver.close()  # Close that window
        driver.switch_to.window(driver.window_handles[0])  # Switch Selenium controls to the original tab to continue normal functionality.

    def setup_suite(self):
        print("Inside setup")
        self.edge_options = webdriver.EdgeOptions()
        self.edge_options.use_chromium = True
        self.driver = webdriver.Edge(options=self.edge_options)        
        #Modify chrome options to disable notifications
        self.selector = Selector(self.driver)   
        self.selector.screenshot_on_failed_checks = True        
        self.verificationErrors = []
        self.accept_next_alert = True
    
    @lcc.test("Hub Home Page and Responsiveness")
    def test_load_home_page(self):
        print("Hub Login")        
            # Open the website
        selector = self.selector
        driver = selector.driver
        driver.get("https://app.bigtincan.com/")
        driver.maximize_window()     
        driver.implicitly_wait(5)
        # Loginto Hub with Sanofi Credentials  
        Username = selector.by_xpath("/html/body/div[2]/div/div/div[2]/div[2]/form/input[1]")
        Username.set_text("tiffany.donnelly+sabic@bigtincan.com")
        Password = selector.by_xpath("/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]")
        Password.set_text("Lacey7&F")
        Password.set_text(Keys.RETURN)
        self.driver.implicitly_wait(10)
        self.driver.switch_to.frame(self.driver.find_element(By.TAG_NAME,"iframe"))
        self.perform_page_responsive("HomePage")

    '''
    @lcc.test("ProductInfoTest")
    def test_product_info_page(self):
        #Navigate to Product Info Page and check responsiveness
        self.perform_page_responsive("ProductInfoPage")
    '''


    ############################## Helper Functions ########################################
    def perform_page_responsive(self,page_name):
        #Load the elements in Home Page from self.responsive_data
        print("Inside perform_page_responsive for page_name ", page_name)
        #Get the home page elements 
        page_elements = self.get_elements_by_page(page_name)
        #print("page_elements is ", page_elements)
        #For each element check the responsiveness by devices and orientations
        for element in page_elements:
            #Get element by its xpath 
            element_xpath = element['xpath']
            element_name = element['name']
            print("element_xpath is ", element_xpath," element_name is ", element_name)
            #Get responsiveness Object 
            responsiveness = element['responsiveness']
            #Check if responsive_check is true
            if responsiveness['check_responsive'] == True:
                #Get Devices and orientations
                devices = responsiveness['devices']
                for device_name in devices:                    
                    #Get device orientation from responsiveness object
                    device = responsiveness[device_name]
                    #Print the device name and width and height
                    print("device_name is ", device_name)
                    print("device is ", device)
                    #Get the width and height of the device
                    width = device['window_width']
                    height = device['window_height']
                    #Set the window size
                    self.driver.set_window_size(width, height)
                    #Get the element by xpath
                    
                    webElement = self.driver.find_element(By.XPATH,element_xpath)                 
                    #Get the element width and height from its size attribute
                    size = webElement.rect
                    print("size is ", size)
                    #Get the element width and height
                    actual_width = size['width']
                    actual_height = size['height']                    
                    print("actual_width is ", actual_width)
                    print("actual_height is ", actual_height)                
                    #Get the element width
                    element_width = device['element_width']
                    #Get the element height
                    element_height = device['element_height']
                    #Check if the element width and height matches the device width and height
                    check_that("Dimension for "+device_name+": Element width of element: "+element_name, element_width, equal_to(actual_width))
                    check_that("Dimension for "+device_name+": Element height of element: "+element_name, element_height, equal_to(actual_height))
                    sleep(2)        

            

    #Implement init to load the Sabric_Resposive.json file and store it in self 
    def __init__(self):
        #Load the json file and store it in self
        with open('suites/Sabic_Responsive.json') as f:
            self.responsive_data = json.load(f)
        #print("Inside init, responsive_data is ", self.responsive_data)
    
    # implement teardown function
    def teardown_suite(self):
            print("Inside teardown")
            self.driver.close()
            self.driver.quit()   
    

    ### This function is to get the elements of a page from the Objects loaded in 
    ### the Sabic_Responsive.json file
    ### Input : page_name
    def get_elements_by_page(self,page_name):
        print("Inside locate_page")
        #Get the home page elements 
        pages  = self.responsive_data
        for page in pages:
            #print("page is ", page)
            #Check if the name of the page is HomePage
            if page['name'] == page_name:
                page_elements = page['elements']
                #print("page_elements is ", page_elements)
                break
        return page_elements

