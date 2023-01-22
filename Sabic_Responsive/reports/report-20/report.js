var reporting_data = {"lemoncheesecake_version": "1.14.0", "report_version": 1.1, "start_time": "2023-01-22T16:40:51.031Z", "end_time": "2023-01-22T16:41:27.445Z", "generation_time": "2023-01-22T16:41:27.445Z", "nb_threads": 1, "title": "Test Report", "info": [["Command line", "lcc run"]], "suites": [{"start_time": "2023-01-22T16:40:51.037Z", "end_time": "2023-01-22T16:41:27.445Z", "tests": [], "suites": [{"start_time": "2023-01-22T16:40:51.037Z", "end_time": "2023-01-22T16:41:27.445Z", "tests": [{"start_time": "2023-01-22T16:40:59.888Z", "end_time": "2023-01-22T16:41:10.407Z", "steps": [{"description": "Hub", "start_time": "2023-01-22T16:40:59.889Z", "end_time": "2023-01-22T16:41:10.407Z", "entries": [{"type": "log", "level": "info", "message": "Set text 'tiffany.donnelly+sabic@bigtincan.com' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[1]'", "time": "2023-01-22T16:41:03.813Z"}, {"type": "log", "level": "info", "message": "Set text 'Lacey7&F' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-22T16:41:07.337Z"}, {"type": "log", "level": "info", "message": "Set text '\ue006' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-22T16:41:07.830Z"}]}], "status": "passed", "status_details": null, "name": "test_load_home_page", "description": "Hub", "tags": [], "properties": {}, "links": []}, {"start_time": "2023-01-22T16:41:10.408Z", "end_time": "2023-01-22T16:41:27.156Z", "steps": [{"description": "Home Page Responsiveness", "start_time": "2023-01-22T16:41:10.408Z", "end_time": "2023-01-22T16:41:27.156Z", "entries": [{"type": "log", "level": "error", "message": "Caught unexpected exception while running test: Traceback (most recent call last):\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/lemoncheesecake/runner.py\", line 185, in run\n    self.test.callback(**test_args)\n  File \"/Users/padmadasa/work/2022/BigTinCan/automation/Sabic_Responsive/suites/Sabic_Responsive_Script.py\", line 112, in test_home_page_responsive\n    element_dim = self.driver.find_element(By.XPATH,element_xpath)\n                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 861, in find_element\n    return self.execute(Command.FIND_ELEMENT, {\"using\": by, \"value\": value})[\"value\"]\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 444, in execute\n    self.error_handler.check_response(response)\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/errorhandler.py\", line 249, in check_response\n    raise exception_class(message, screen, stacktrace)\nselenium.common.exceptions.NoSuchElementException: Message: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div/div/header/nav/div/svg\"}\n  (Session info: MicrosoftEdge=109.0.1518.61)\nStacktrace:\n0   msedgedriver                        0x0000000105032ae8 msedgedriver + 5065448\n1   msedgedriver                        0x0000000104fa53d3 msedgedriver + 4486099\n2   msedgedriver                        0x0000000104bd36d7 msedgedriver + 480983\n3   msedgedriver                        0x0000000104c1b44c msedgedriver + 775244\n4   msedgedriver                        0x0000000104c1b6a1 msedgedriver + 775841\n5   msedgedriver                        0x0000000104c5f4e4 msedgedriver + 1053924\n6   msedgedriver                        0x0000000104c412ad msedgedriver + 930477\n7   msedgedriver                        0x0000000104c5c7f0 msedgedriver + 1042416\n8   msedgedriver                        0x0000000104c41053 msedgedriver + 929875\n9   msedgedriver                        0x0000000104c0b5bd msedgedriver + 710077\n10  msedgedriver                        0x0000000104c0cbae msedgedriver + 715694\n11  msedgedriver                        0x0000000104ffd2ae msedgedriver + 4846254\n12  msedgedriver                        0x000000010500179c msedgedriver + 4863900\n13  msedgedriver                        0x0000000105001f9a msedgedriver + 4865946\n14  msedgedriver                        0x0000000105009c0f msedgedriver + 4897807\n15  msedgedriver                        0x000000010500273c msedgedriver + 4867900\n16  msedgedriver                        0x0000000104fd6ae1 msedgedriver + 4688609\n17  msedgedriver                        0x00000001050243d8 msedgedriver + 5006296\n18  msedgedriver                        0x00000001050244f7 msedgedriver + 5006583\n19  msedgedriver                        0x000000010503ab48 msedgedriver + 5098312\n20  libsystem_pthread.dylib             0x00007fff2033e8fc _pthread_start + 224\n21  libsystem_pthread.dylib             0x00007fff2033a443 thread_start + 15\n\n", "time": "2023-01-22T16:41:27.155Z"}]}], "status": "failed", "status_details": null, "name": "test_home_page_responsive", "description": "Home Page Responsiveness", "tags": [], "properties": {}, "links": []}], "suites": [], "name": "Test_Responsive_Sabic", "description": "Test responsive sabic", "tags": [], "properties": {}, "links": []}], "name": "Sabic_Responsive_Script", "description": "Sabic responsive script", "tags": [], "properties": {}, "links": []}]}