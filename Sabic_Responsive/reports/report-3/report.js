var reporting_data = {"lemoncheesecake_version": "1.14.0", "report_version": 1.1, "start_time": "2023-01-20T20:49:32.792Z", "end_time": "2023-01-20T20:50:49.445Z", "generation_time": "2023-01-20T20:50:49.445Z", "nb_threads": 1, "title": "Test Report", "info": [["Command line", "lcc run"]], "suites": [{"start_time": "2023-01-20T20:49:32.801Z", "end_time": "2023-01-20T20:50:49.444Z", "tests": [], "suites": [{"start_time": "2023-01-20T20:49:32.801Z", "end_time": "2023-01-20T20:50:49.444Z", "tests": [{"start_time": "2023-01-20T20:49:44.228Z", "end_time": "2023-01-20T20:50:49.438Z", "steps": [{"description": "Hub", "start_time": "2023-01-20T20:49:44.228Z", "end_time": "2023-01-20T20:50:49.438Z", "entries": [{"type": "log", "level": "info", "message": "Set text 'tiffany.donnelly+sabic@bigtincan.com' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[1]'", "time": "2023-01-20T20:49:48.866Z"}, {"type": "log", "level": "info", "message": "Set text 'Lacey7&F' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-20T20:49:52.655Z"}, {"type": "log", "level": "info", "message": "Set text '\ue006' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-20T20:49:53.192Z"}, {"type": "attachment", "description": "HS-end of page", "filename": "attachments/0001_screenshotHS-end of page.png", "as_image": true, "time": "2023-01-20T20:50:18.198Z"}, {"type": "attachment", "description": "HS-Top of page", "filename": "attachments/0002_screenshotHS-Top of page.png", "as_image": true, "time": "2023-01-20T20:50:23.601Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[1]/div[2]'", "time": "2023-01-20T20:50:33.615Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[1]/div[2]'", "time": "2023-01-20T20:50:44.361Z"}, {"type": "log", "level": "error", "message": "Caught unexpected exception while running test: Traceback (most recent call last):\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/lemoncheesecake/runner.py\", line 185, in run\n    self.test.callback(**test_args)\n  File \"/Users/padmadasa/work/2022/BigTinCan/automation/Sabic_Responsive/suites/Responsive.py\", line 126, in test_load_home_page\n    selector.by_xpath(contentpath).click()\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/lemoncheesecake_selenium/selection.py\", line 153, in click\n    self.element.click()\n    ^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/lemoncheesecake_selenium/selection.py\", line 137, in element\n    return self.driver.find_element(self.by, self.value)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 861, in find_element\n    return self.execute(Command.FIND_ELEMENT, {\"using\": by, \"value\": value})[\"value\"]\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 444, in execute\n    self.error_handler.check_response(response)\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/errorhandler.py\", line 249, in check_response\n    raise exception_class(message, screen, stacktrace)\nselenium.common.exceptions.NoSuchElementException: Message: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div/div/div[2]/div[1]/div[2]\"}\n  (Session info: MicrosoftEdge=109.0.1518.61)\nStacktrace:\n0   msedgedriver                        0x0000000101261ae8 msedgedriver + 5065448\n1   msedgedriver                        0x00000001011d43d3 msedgedriver + 4486099\n2   msedgedriver                        0x0000000100e026d7 msedgedriver + 480983\n3   msedgedriver                        0x0000000100e4a44c msedgedriver + 775244\n4   msedgedriver                        0x0000000100e4a6a1 msedgedriver + 775841\n5   msedgedriver                        0x0000000100e8e4e4 msedgedriver + 1053924\n6   msedgedriver                        0x0000000100e702ad msedgedriver + 930477\n7   msedgedriver                        0x0000000100e8b7f0 msedgedriver + 1042416\n8   msedgedriver                        0x0000000100e70053 msedgedriver + 929875\n9   msedgedriver                        0x0000000100e3a5bd msedgedriver + 710077\n10  msedgedriver                        0x0000000100e3bbae msedgedriver + 715694\n11  msedgedriver                        0x000000010122c2ae msedgedriver + 4846254\n12  msedgedriver                        0x000000010123079c msedgedriver + 4863900\n13  msedgedriver                        0x0000000101230f9a msedgedriver + 4865946\n14  msedgedriver                        0x0000000101238c0f msedgedriver + 4897807\n15  msedgedriver                        0x000000010123173c msedgedriver + 4867900\n16  msedgedriver                        0x0000000101205ae1 msedgedriver + 4688609\n17  msedgedriver                        0x00000001012533d8 msedgedriver + 5006296\n18  msedgedriver                        0x00000001012534f7 msedgedriver + 5006583\n19  msedgedriver                        0x0000000101269b48 msedgedriver + 5098312\n20  libsystem_pthread.dylib             0x00007fff2033e8fc _pthread_start + 224\n21  libsystem_pthread.dylib             0x00007fff2033a443 thread_start + 15\n\n", "time": "2023-01-20T20:50:49.438Z"}]}], "status": "failed", "status_details": null, "name": "test_load_home_page", "description": "Hub", "tags": [], "properties": {}, "links": []}], "suites": [], "name": "TestHomePage", "description": "Testhomepage", "tags": [], "properties": {}, "links": []}], "name": "Responsive", "description": "Responsive", "tags": [], "properties": {}, "links": []}]}