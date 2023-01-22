var reporting_data = {"lemoncheesecake_version": "1.14.0", "report_version": 1.1, "start_time": "2023-01-20T18:52:09.690Z", "end_time": "2023-01-20T18:54:33.196Z", "generation_time": "2023-01-20T18:54:33.204Z", "nb_threads": 1, "title": "Test Report", "info": [["Command line", "lcc run"]], "suites": [{"start_time": "2023-01-20T18:52:09.704Z", "end_time": "2023-01-20T18:54:33.196Z", "tests": [], "suites": [{"start_time": "2023-01-20T18:52:09.704Z", "end_time": "2023-01-20T18:54:33.195Z", "tests": [{"start_time": "2023-01-20T18:52:19.357Z", "end_time": "2023-01-20T18:54:33.191Z", "steps": [{"description": "Hub", "start_time": "2023-01-20T18:52:19.358Z", "end_time": "2023-01-20T18:54:33.191Z", "entries": [{"type": "log", "level": "info", "message": "Set text 'tiffany.donnelly+sabic@bigtincan.com' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[1]'", "time": "2023-01-20T18:52:22.983Z"}, {"type": "log", "level": "info", "message": "Set text 'Lacey7&F' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-20T18:52:27.714Z"}, {"type": "log", "level": "info", "message": "Set text '\ue006' on element identified by XPATH '/html/body/div[2]/div/div/div[2]/div[2]/form/input[2]'", "time": "2023-01-20T18:52:28.385Z"}, {"type": "attachment", "description": "HS-end of page", "filename": "attachments/0001_screenshotHS-end of page.png", "as_image": true, "time": "2023-01-20T18:52:51.948Z"}, {"type": "attachment", "description": "HS-Top of page", "filename": "attachments/0002_screenshotHS-Top of page.png", "as_image": true, "time": "2023-01-20T18:52:57.149Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[1]/div[2]'", "time": "2023-01-20T18:53:07.161Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div[2]/div/div[1]/nav/div'", "time": "2023-01-20T18:53:17.821Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[2]/div[2]'", "time": "2023-01-20T18:53:24.813Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div[2]/div/div[1]/nav/div'", "time": "2023-01-20T18:53:34.977Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[3]/div[2]'", "time": "2023-01-20T18:53:40.318Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div[2]/div/div[1]/nav/div'", "time": "2023-01-20T18:53:50.487Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[4]/div[2]'", "time": "2023-01-20T18:53:55.682Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div[2]/div/div[1]/nav/div'", "time": "2023-01-20T18:54:06.093Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div/div/div/div[2]/div[4]/div[2]'", "time": "2023-01-20T18:54:12.152Z"}, {"type": "log", "level": "info", "message": "Click on element identified by XPATH '/html/body/div[2]/div/div[1]/nav/div'", "time": "2023-01-20T18:54:22.379Z"}, {"type": "log", "level": "error", "message": "Caught unexpected exception while running test: Traceback (most recent call last):\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/lemoncheesecake/runner.py\", line 185, in run\n    self.test.callback(**test_args)\n  File \"/Users/padmadasa/work/2022/BigTinCan/automation/Sabic_Responsive/suites/Responsive.py\", line 99, in test_load_home_page\n    driver.switch_to.frame(driver.find_element(By.TAG_NAME,\"iframe\"))\n                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 861, in find_element\n    return self.execute(Command.FIND_ELEMENT, {\"using\": by, \"value\": value})[\"value\"]\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/webdriver.py\", line 444, in execute\n    self.error_handler.check_response(response)\n  File \"/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/selenium/webdriver/remote/errorhandler.py\", line 249, in check_response\n    raise exception_class(message, screen, stacktrace)\nselenium.common.exceptions.NoSuchElementException: Message: no such element: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"iframe\"}\n  (Session info: MicrosoftEdge=109.0.1518.61)\nStacktrace:\n0   msedgedriver                        0x0000000102a17b58 msedgedriver + 5065560\n1   msedgedriver                        0x000000010298a443 msedgedriver + 4486211\n2   msedgedriver                        0x00000001025b86d7 msedgedriver + 480983\n3   msedgedriver                        0x000000010260044c msedgedriver + 775244\n4   msedgedriver                        0x00000001026006a1 msedgedriver + 775841\n5   msedgedriver                        0x00000001026444e4 msedgedriver + 1053924\n6   msedgedriver                        0x00000001026262ad msedgedriver + 930477\n7   msedgedriver                        0x00000001026417f0 msedgedriver + 1042416\n8   msedgedriver                        0x0000000102626053 msedgedriver + 929875\n9   msedgedriver                        0x00000001025f05bd msedgedriver + 710077\n10  msedgedriver                        0x00000001025f1bae msedgedriver + 715694\n11  msedgedriver                        0x00000001029e231e msedgedriver + 4846366\n12  msedgedriver                        0x00000001029e680c msedgedriver + 4864012\n13  msedgedriver                        0x00000001029e700a msedgedriver + 4866058\n14  msedgedriver                        0x00000001029eec7f msedgedriver + 4897919\n15  msedgedriver                        0x00000001029e77ac msedgedriver + 4868012\n16  msedgedriver                        0x00000001029bbb51 msedgedriver + 4688721\n17  msedgedriver                        0x0000000102a09448 msedgedriver + 5006408\n18  msedgedriver                        0x0000000102a09567 msedgedriver + 5006695\n19  msedgedriver                        0x0000000102a1fbb8 msedgedriver + 5098424\n20  libsystem_pthread.dylib             0x00007fff2033e8fc _pthread_start + 224\n21  libsystem_pthread.dylib             0x00007fff2033a443 thread_start + 15\n\n", "time": "2023-01-20T18:54:33.191Z"}]}], "status": "failed", "status_details": null, "name": "test_load_home_page", "description": "Hub", "tags": [], "properties": {}, "links": []}], "suites": [], "name": "TestHomePage", "description": "Testhomepage", "tags": [], "properties": {}, "links": []}], "name": "Responsive", "description": "Responsive", "tags": [], "properties": {}, "links": []}]}