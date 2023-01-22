'''
Author: Padmapriya Dasarathy
Date: 2023-01-09
Description: This test case is to sanity test Sanofi
'''
import unittest
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
from selenium.webdriver.common.action_chains import ActionChains
import logging
import time
from time import sleep
#Importing lemoncheesecake packages
import os.path as osp
import json
import csv
import lemoncheesecake.api as lcc
from lemoncheesecake.matching import *
from lemoncheesecake_selenium import Selector, save_screenshot, is_in_page
from selenium.webdriver.common.action_chains import ActionChains
PROJECT_DIR = osp.join(osp.dirname(__file__), "..")

@lcc.suite()
class TestHomePage:
    # This function is used to setup the environment for the test cases
    def perform_actions(self,driver, keys):
        actions = ActionChains(driver)
        actions.send_keys(keys)
        time.sleep(2)
        print('Performing Actions!')
        actions.perform()    

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

    def __init__(self):
        data = csv.reader(open(osp.join(PROJECT_DIR, "data.csv")))
        print ("The data is ", data)
        self.data = []
        for row in data:
            self.data.append(row[0])
        print ("The data is ", self.data) 

    # This function is used get a csv file and read the data from it from another function
    # def get_data(self):
    #     tabdata = csv.reader(open(osp.join(PROJECT_DIR, "data2.csv")))
    #     print ("The tabdata is ", tabdata)
    #     self.tabdata = []
    #     for row in tabdata:
    #         self.tabdata.append(row[0])
    #     print ("The data is ", self.tabdata)  
               
    
     
    # This function is used to launch btc hub
    @lcc.test("Hub")
     
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
        sleep(15)
        #try different screen widths using loop
        width = [375, 768, 1024, 1280, 1366, 1440, 1920]
        height = [667, 1024, 768, 800, 768, 900, 1080]
        for w,h in zip(width,height):
            driver.set_window_size(w,h)
            sleep(5)
        #Implement page scroll to the bottom of page 
        #Switch to the iframe
            driver.switch_to.frame(driver.find_element(By.TAG_NAME,"iframe"))
            #Scroll to the bottom of the page
            bottom_of_page = selector.by_xpath("/html/body/div/div/div/div[3]/div[2]/div/div[3]").save_screenshot("HS-end of page")
            sleep(5)
            #Scroll to the top of the page
            Top_of_page = selector.by_xpath("/html/body/div/div/div/header").save_screenshot("HS-Top of page")
            sleep(5)
            for contentpath in self.data:
                for row in contentpath:
                    print("Button path is ", contentpath)
                    sleep(5)
                    selector.by_xpath(contentpath).click()
                    sleep(5)
                # switch to default mode and then back to iframe
                    for col in row:
                        # get data from the next column
                        for i=2; i<5; i++:
                        contentpath = row[1], col[2]
                        print("content path is ", contentpath[])
                        sleep(5)
                        selector.by_xpath(contentpath[]).click()
                # switch to default mode and then back to iframe
                driver.switch_to.default_content()
                sleep(5)
                    # click on logo on lhs
                selector.by_xpath("/html/body/div[2]/div/div[1]/nav/div").click()
                driver.switch_to.frame(driver.find_element(By.TAG_NAME,"iframe"))
                # driver.by_xpath("/html/body/div[2]/div/div[1]/nav/ul/li[1]/a").click()
            # selector.by_id("search").set_text(contentpath)
            # sleep(5)         
            # #click on a content
            # selector.by_xpath("/html/body/div[2]/div/div[1]/main/div/div/div[1]/div[2]/div/ul/li[2]/div/a/div/div[3]/span[2]").click()
            # sleep(5)
            # #click on a button on the story
            # selector.by_xpath("/html/body/div[2]/div/div[1]/main/div/div/div[2]/div/div/ul/li[8]/div/a/div/div[5]").click()
            # sleep(5)
            # selector.by_xpath("/html/body/div[2]/div/div[1]/nav/ul/li[1]/a").click()
            # sleep(5)
            # #exit iframe and go back to main page
            # driver.switch_to.default_content()

        #scroll to bottom of the page until see an element
        #scroll to the bottom of the page
        #selector.by_xpath("/html/body/div[2]/div/div[1]/main/article/div/div/div[1]/div/p").check_element_exists()
        #sleep(5)
    






  

# implement teardown function
def teardown_suite(self):
        print("Inside teardown")
        self.driver.close()
        self.driver.quit()        


