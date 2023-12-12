"use strict";(self.webpackChunkpaydock_integration_guides=self.webpackChunkpaydock_integration_guides||[]).push([[86],{817:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={li:"li",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Perform the following api call to add the default payment source to the customer"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/customers/:customer_id HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "payment_source": {\n        "vault_token": vault_token\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},5262:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Using the session vault token or permanent vault token. Perform a 3ds pre auth request."}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/charges/3ds HTTP/1.1\nHost: api.paydock.com\nx-user-public-key: {{public-key}}\nContent-Type: application/json\n\n{\n    "amount": "103",\n    "currency": "AUD",\n    "customer": {\n        "payment_source": {\n            "vault_token": vault_token,\n            "gateway_id": "gateway-id"\n        } \n},\n    "_3ds": {\n        "browser_details": {\n            "name": "CHROME",\n            "java_enabled": "true",\n            "language": "en-US",\n            "screen_height": "640",\n            "screen_width": "480",\n            "time_zone": "273",\n            "color_depth": "24"\n        } \n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample response."}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "_3ds": {\n                "id": "4c925017-5676-4a7e-afa7-710a7374591e",\n                "token": "eyJjb250ZW50IjoiPGRpdiBpZD1cInJlZGlyZWN0VG8zZHMxG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L2h0bWxcIj4gPGlmcmFtZSBpZD1cInJlZGlyZWNld2F5Lm1tL2NhbGxiYWNrSW50ZXJmYWNlL2dhdGV3YXkvM2EzMDExMWQyYmM5MjM4NmIyNjU1NGU3OTNlZDE1Yzc3ZjJlNGQxYWExOTMwYjc1MTYxMDNkYzAyZDUzMWQ3Y1wiIC8+IDxpbnB1dCB0eXBlPVwiaW1vdmVDaGlsZChlKTsgfSB9IDwvc2NyaXB0PiA8L2iOiJodG1sIiwiY2hhcmdlXzNkc19pZCI6IjRjOTI1MDE3LTU2NzYtNGE3ZS1hZmE3LTcxMGE3Mzc0NTkxZSJ9"\n            },\n            "status": "pre_authentication_pending"\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using the ",(0,a.jsx)(e.code,{children:"resource.data._3ds"}),". Create a Canvas3ds widget using the client-sdk."]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"html",children:"\n    <div id=\"widget\"></div>\n    <script src=\"https://widget.paydock.com/sdk/latest/widget.umd.min.js\"><\/script>\n    <script>\n        var widget = new paydock.Canvas3ds('#widget', token);\n        widget.setEnv('sandbox');\n        widget.on('chargeAuthSuccess', function (data) {\n            console.log(data);\n        });\n        widget.on('chargeAuthReject', function (data) {\n            console.log(data);\n        });\n        widget.on('chargeAuthCancelled', function (data) {\n            console.log(data);\n        });\n        widget.on('additionalDataCollectSuccess', function (data) {\n            console.log(data);\n        });\n        widget.on('additionalDataCollectReject', function (data) {\n            console.log(data);\n        });\n        widget.on('chargeAuth', function (data) {\n            console.log(data);\n        });\n        widget.load();\n    <\/script>\n"})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},126:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){return(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/charges HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n\t"amount":"100",\n\t"currency":"AUD",\n\t"customer_id":"5e4bfbd86d244b438451fbd7"\n}\n'})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s()}},2687:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using the ",(0,a.jsx)(e.code,{children:"vault_token"}),". Create a charge request"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/charges HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "amount": "10.00",\n    "currency": "AUD",\n    "customer": {\n        "payment_source": {\n            "vault_token": "996280fe-961c-4f84-9e99-e490402c48b1"\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample charge response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "transfer": {\n                "items": []\n            },\n            "schedule": {\n                "stopped": false\n            },\n            "statistics": {\n                "total_refunded_amount": 0,\n                "full_refund": false,\n                "need_sync": true\n            },\n            "customer": {\n                "payment_source": {\n                    "type": "card",\n                    "card_name": "John Smith",\n                    "card_number_last4": "4242",\n                    "expire_month": 12,\n                    "expire_year": 2023,\n                    "gateway_id": "65235b464771c64d6774b38d",\n                    "vault_token": "996280fe-961c-4f84-9e99-e490402c48b1",\n                    "card_scheme": "visa",\n                    "card_number_bin": "42424242",\n                    "gateway_name": "MasterCard",\n                    "gateway_type": "MasterCard",\n                    "items": []\n                }\n            },\n            "type": "financial",\n            "status": "complete",\n            "capture": true,\n            "authorization": false,\n            "archived": false,\n            "one_off": true,\n            "_source_ip_address": "220.233.78.99",\n            "_id": "65419867a0fe8fc32471b224",\n            "company_id": "65235992df412413b29a8f3b",\n            "amount": 13,\n            "currency": "AUD",\n            "items": [],\n            "transactions": [\n                {\n                    "type": "sale",\n                    "status": "complete",\n                    "_source_ip_address": "220.233.78.99",\n                    "gateway_specific_code": null,\n                    "gateway_specific_description": null,\n                    "error_message": null,\n                    "error_code": null,\n                    "status_code": null,\n                    "status_code_description": null,\n                    "include_authorization": false,\n                    "_id": "65419867a0fe8fc32471b225",\n                    "created_at": "2023-11-01T00:14:31.103Z",\n                    "amount": 13,\n                    "currency": "AUD",\n                    "amount_fee": null,\n                    "amount_surcharge": null,\n                    "amount_original": null,\n                    "external_id": "03533287-b922-4508-8d80-a3d1e46f37d7:de9ecbe8-4725-486c-a2b6-2bf8214d8134",\n                    "external_reference": "330500102771",\n                    "processed_at": "2023-11-01T00:14:32.336Z"\n                }\n            ],\n            "amount_surcharge": null,\n            "amount_original": null,\n            "updated_at": "2023-11-01T00:14:32.336Z",\n            "created_at": "2023-11-01T00:14:31.107Z",\n            "__v": 0,\n            "external_id": "03533287-b922-4508-8d80-a3d1e46f37d7:de9ecbe8-4725-486c-a2b6-2bf8214d8134"\n        }\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},6657:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={li:"li",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Create a customer using the permamnent vault token"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/customers HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "first_name": "John",\n    "last_name": "Smith",\n    "reference": "external systems customer id",\n    "email": "johnsmith@paydock.com",\n    "payment_source": {\n        "vault_token": "0fd20631-509e-45c7-a8f0-f1f36d6ad298"\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},1563:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Take the OTT (One Time Token) from the ",(0,a.jsx)(e.code,{children:"payment_source_token"})," field and create a permanent vault token"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Permanent vault token request"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/vault/payment_sources HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n{\n    "token": "6311c15f-8024-42f9-8ed5-200621ecfb1d"\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Permanent vault response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "payment_source",\n        "data": {\n            "type": "card",\n            "_source_ip_address": "x.x.x.x",\n            "vault_type": "permanent",\n            "expire_month": 1,\n            "expire_year": 2039,\n            "card_name": "Wanda Mertz",\n            "card_scheme": "mastercard",\n            "card_number_last4": "0008",\n            "card_number_bin": "51234500",\n            "ref_token": "9139516499300184",\n            "status": "active",\n            "created_at": "2023-11-02T02:13:09.832Z",\n            "company_id": "65235992df412413b29a8f3b",\n            "vault_token": "3dc68807-d6d9-44bc-89a3-4cd922131b01",\n            "updated_at": "2023-11-02T02:13:27.960Z"\n        }\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},5914:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using the ",(0,a.jsx)(e.code,{children:"vault_token"}),", ",(0,a.jsx)(e.code,{children:"gateway_id"}),", ",(0,a.jsx)(e.code,{children:"_id"})," (customer_id) that matches the ",(0,a.jsx)(e.code,{children:"payment_source_token"}),". Create a charge request"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/charges?capture=false HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "amount": "10.00",\n    "currency": "AUD",\n    "customer_id": customer_id,\n    "customer": {\n        "payment_source": {\n            "vault_token": vault_token,\n            "gateway_id": gateway_id\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample pre auth response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "transfer": {\n                "items": []\n            },\n            "schedule": {\n                "stopped": false\n            },\n            "statistics": {\n                "total_refunded_amount": 0,\n                "full_refund": false,\n                "need_sync": true\n            },\n            "customer": {\n                "payment_source": {\n                    "type": "card",\n                    "card_name": "Wanda Mertz",\n                    "card_number_last4": "0008",\n                    "expire_month": 1,\n                    "expire_year": 2039,\n                    "gateway_id": "65235b464771c64d6774b38d",\n                    "vault_token": "3dc68807-d6d9-44bc-89a3-4cd922131b01",\n                    "card_scheme": "mastercard",\n                    "card_number_bin": "51234500",\n                    "gateway_name": "MasterCard",\n                    "gateway_type": "MasterCard",\n                    "items": []\n                }\n            },\n            "type": "financial",\n            "status": "pending",\n            "capture": false,\n            "authorization": true,\n            "archived": false,\n            "one_off": true,\n            "_source_ip_address": "220.233.78.99",\n            "_id": "655ec4b3ce4fec339396064f",\n            "company_id": "65235992df412413b29a8f3b",\n            "amount": 10,\n            "currency": "AUD",\n            "items": [],\n            "transactions": [\n                {\n                    "type": "sale",\n                    "status": "pending",\n                    "_source_ip_address": "",\n                    "gateway_specific_code": null,\n                    "gateway_specific_description": null,\n                    "error_message": null,\n                    "error_code": null,\n                    "status_code": null,\n                    "status_code_description": null,\n                    "include_authorization": false,\n                    "_id": "655ec4b3ce4fec3393960650",\n                    "created_at": "2023-11-23T03:19:15.128Z",\n                    "amount": 10,\n                    "currency": "AUD",\n                    "amount_fee": null,\n                    "amount_surcharge": null,\n                    "amount_original": null,\n                    "external_id": "47b513e7-e769-4459-9246-14d0fda7af41:6bb1f481-f865-42b5-883d-0e88dc907392",\n                    "external_reference": "332703313755",\n                    "pended_at": "2023-11-23T03:49:16.835Z",\n                    "processed_at": "2023-11-23T03:19:16.838Z"\n                }\n            ],\n            "amount_surcharge": null,\n            "amount_original": null,\n            "updated_at": "2023-11-23T03:19:16.838Z",\n            "created_at": "2023-11-23T03:19:15.133Z",\n            "__v": 0,\n            "external_id": "47b513e7-e769-4459-9246-14d0fda7af41:6bb1f481-f865-42b5-883d-0e88dc907392"\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Perform any other logic you wish before capturing."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Using the ",(0,a.jsx)(e.code,{children:"resource.data._id"}),". Perform a capture"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:"\nPOST /v1/charges/:capture_id/capture HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample response from the capture"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "_id": "5ec6305eb12c99579e46edef",\n            "created_at": "2020-05-21T07:40:14.179Z",\n            "updated_at": "2020-05-22T15:02:05.580Z",\n            "company_id": "5cbeda664fdfb25772b5547f",\n            "amount": 10,\n            "currency": "AUD",\n            "__v": 0,\n            "external_id": "ch_0Gl90kjQKtR4Rpd2KlGhQamr",\n            "transactions": [\n                {\n                    "created_at": "2020-05-21T07:40:14.177Z",\n                    "amount": 10,\n                    "currency": "AUD",\n                    "_id": "5ec6305eb12c99579e46edf0",\n                    "pended_at": "2020-05-23T07:40:57.991Z",\n                    "error_code": null,\n                    "error_message": null,\n                    "gateway_specific_description": null,\n                    "gateway_specific_code": null,\n                    "_source_ip_address": "192.168.0.1",\n                    "status": "complete",\n                    "type": "sale"\n                }\n            ],\n            "one_off": true,\n            "archived": false,\n            "customer": {\n                "payment_source": {\n                    "card_name": "Wanda Mertz",\n                    "card_number_last4": "4242",\n                    "card_number_bin": "42424242",\n                    "expire_month": 1,\n                    "expire_year": 21,\n                    "gateway_id": "5cbede1f151b842653e987be",\n                    "card_scheme": "visa",\n                    "gateway_name": "Stripe 1",\n                    "gateway_type": "Stripe"\n                }\n            },\n            "capture": true,\n            "status": "complete",\n            "schedule": {\n                "authorised_pended_at": "2020-05-22T09:40:57.324Z"\n            },\n            "items": [],\n            "transfer": {\n                "items": []\n            }\n        }\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},5474:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using the ",(0,a.jsx)(e.code,{children:"vault_token"}),". Create a charge request"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/charges?capture=false HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "amount": "10.00",\n    "currency": "AUD",\n    "customer": {\n        "payment_source": {\n            "vault_token": "996280fe-961c-4f84-9e99-e490402c48b1"\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample charge response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "transfer": {\n                "items": []\n            },\n            "schedule": {\n                "stopped": false\n            },\n            "statistics": {\n                "total_refunded_amount": 0,\n                "full_refund": false,\n                "need_sync": true\n            },\n            "customer": {\n                "payment_source": {\n                    "type": "card",\n                    "card_name": "Wanda Mertz",\n                    "card_number_last4": "0008",\n                    "expire_month": 1,\n                    "expire_year": 2039,\n                    "gateway_id": "65235b464771c64d6774b38d",\n                    "vault_token": "3dc68807-d6d9-44bc-89a3-4cd922131b01",\n                    "card_scheme": "mastercard",\n                    "card_number_bin": "51234500",\n                    "gateway_name": "MasterCard",\n                    "gateway_type": "MasterCard",\n                    "items": []\n                }\n            },\n            "type": "financial",\n            "status": "pending",\n            "capture": false,\n            "authorization": true,\n            "archived": false,\n            "one_off": true,\n            "_source_ip_address": "220.233.78.99",\n            "_id": "655ec4b3ce4fec339396064f",\n            "company_id": "65235992df412413b29a8f3b",\n            "amount": 10,\n            "currency": "AUD",\n            "items": [],\n            "transactions": [\n                {\n                    "type": "sale",\n                    "status": "pending",\n                    "_source_ip_address": "",\n                    "gateway_specific_code": null,\n                    "gateway_specific_description": null,\n                    "error_message": null,\n                    "error_code": null,\n                    "status_code": null,\n                    "status_code_description": null,\n                    "include_authorization": false,\n                    "_id": "655ec4b3ce4fec3393960650",\n                    "created_at": "2023-11-23T03:19:15.128Z",\n                    "amount": 10,\n                    "currency": "AUD",\n                    "amount_fee": null,\n                    "amount_surcharge": null,\n                    "amount_original": null,\n                    "external_id": "47b513e7-e769-4459-9246-14d0fda7af41:6bb1f481-f865-42b5-883d-0e88dc907392",\n                    "external_reference": "332703313755",\n                    "pended_at": "2023-11-23T03:49:16.835Z",\n                    "processed_at": "2023-11-23T03:19:16.838Z"\n                }\n            ],\n            "amount_surcharge": null,\n            "amount_original": null,\n            "updated_at": "2023-11-23T03:19:16.838Z",\n            "created_at": "2023-11-23T03:19:15.133Z",\n            "__v": 0,\n            "external_id": "47b513e7-e769-4459-9246-14d0fda7af41:6bb1f481-f865-42b5-883d-0e88dc907392"\n        }\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Perform any other logic you wish before capturing."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Using the ",(0,a.jsx)(e.code,{children:"resource.data._id"}),". Perform a capture"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:"\nPOST /v1/charges/:capture_id/capture HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample response from the capture"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "_id": "5ec6305eb12c99579e46edef",\n            "created_at": "2020-05-21T07:40:14.179Z",\n            "updated_at": "2020-05-22T15:02:05.580Z",\n            "company_id": "5cbeda664fdfb25772b5547f",\n            "amount": 10,\n            "currency": "AUD",\n            "__v": 0,\n            "external_id": "ch_0Gl90kjQKtR4Rpd2KlGhQamr",\n            "transactions": [\n                {\n                    "created_at": "2020-05-21T07:40:14.177Z",\n                    "amount": 10,\n                    "currency": "AUD",\n                    "_id": "5ec6305eb12c99579e46edf0",\n                    "pended_at": "2020-05-23T07:40:57.991Z",\n                    "error_code": null,\n                    "error_message": null,\n                    "gateway_specific_description": null,\n                    "gateway_specific_code": null,\n                    "_source_ip_address": "192.168.0.1",\n                    "status": "complete",\n                    "type": "sale"\n                }\n            ],\n            "one_off": true,\n            "archived": false,\n            "customer": {\n                "payment_source": {\n                    "card_name": "Wanda Mertz",\n                    "card_number_last4": "4242",\n                    "card_number_bin": "42424242",\n                    "expire_month": 1,\n                    "expire_year": 21,\n                    "gateway_id": "5cbede1f151b842653e987be",\n                    "card_scheme": "visa",\n                    "gateway_name": "Stripe 1",\n                    "gateway_type": "Stripe"\n                }\n            },\n            "capture": true,\n            "status": "complete",\n            "schedule": {\n                "authorised_pended_at": "2020-05-22T09:40:57.324Z"\n            },\n            "items": [],\n            "transfer": {\n                "items": []\n            }\n        }\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},8778:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Take the OTT (One Time Token) from the ",(0,a.jsx)(e.code,{children:"payment_source_token"})," field and create a session vault token"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Session vault token request"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:'\nPOST /v1/vault/payment_sources HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n{\n    "token": "6311c15f-8024-42f9-8ed5-200621ecfb1d",\n    "vault_type": "session"\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Session vault response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "payment_source",\n        "data": {\n            "type": "card",\n            "_source_ip_address": "x.x.x.x",\n            "vault_type": "session",\n            "expire_month": 12,\n            "expire_year": 2023,\n            "card_name": "John Smith",\n            "card_scheme": "visa",\n            "card_number_last4": "4242",\n            "card_number_bin": "42424242",\n            "ref_token": "9653863864182813",\n            "status": "active",\n            "created_at": "2023-11-01T00:13:22.084Z",\n            "company_id": "65235992df412413b29a8f3b",\n            "vault_token": "996280fe-961c-4f84-9e99-e490402c48b1",\n            "updated_at": "2023-11-01T00:13:59.412Z"\n        }\n    }\n}\n'})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},6224:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Using the ",(0,a.jsx)(e.code,{children:"customer_id"})," perform a search."]}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"http",children:"\nGET /v1/customers?id=customer_id HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Sample response"}),"\n"]}),"\n",(0,a.jsx)(c.Z,{language:"json",children:'\n{\n    "status": 200,\n    "error": null,\n    "resource": {\n        "query_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcmNoaXZlZCI6ZmFsc2UsInBheW1lbnRfdHlwZSI6InNvdXJjZSIsImlkIjoiNjUyY2E0MzkxZTg3MjljYzkxOWU5MmY3IiwiaWF0IjoxNzAwNzA3MTg0fQ.Yc9rmRRemGsPwqBXyG4ghKOmtEs3Y_itoTDL-LabJ0A",\n        "type": "customers",\n        "data": [\n            {\n                "_id": "652ca4391e8729cc919e92f7",\n                "_source_ip_address": "54.79.80.148",\n                "first_name": "John",\n                "last_name": "Smith",\n                "email": "johnsmith@paydock.com",\n                "user_id": "65235992df412413b29a8f40",\n                "default_source": "652ca843f7d208c9ce2041a3",\n                "status": "active",\n                "archived": false,\n                "created_at": "2023-10-16T02:47:21.424Z",\n                "updated_at": "2023-10-16T03:04:35.113Z",\n                "_check_expire_date": false,\n                "statistics": {\n                    "successful_transactions": 1,\n                    "total_collected_amount": 100,\n                    "currency": {\n                        "AUD": {\n                            "count": 1,\n                            "total_amount": 100\n                        }\n                    }\n                },\n                "_service": {\n                    "default_gateway_id": "65235b464771c64d6774b38d"\n                },\n                "payment_sources": [\n                    {\n                        "_id": "652ca4391e8729cc919e92fa",\n                        "type": "card",\n                        "vault_token": "3e6af4ae-affd-46d0-9af5-1ee42ee6d7e8",\n                        "card_name": "John Smith",\n                        "card_number_bin": "42424242",\n                        "card_number_last4": "4242",\n                        "card_scheme": "visa",\n                        "address_country": "AU",\n                        "expire_month": 1,\n                        "expire_year": 2024,\n                        "status": "archived",\n                        "created_at": "2023-10-16T02:47:21.444Z",\n                        "updated_at": "2023-10-16T03:04:35.113Z"\n                    },\n                    {\n                        "_id": "652ca4c4143e65d1f4182c2f",\n                        "type": "card",\n                        "gateway_id": "65235b464771c64d6774b38d",\n                        "vault_token": "cd7165c0-7300-4cbc-b082-859501d0eebb",\n                        "card_name": "John Smith",\n                        "card_number_bin": "42424242",\n                        "card_number_last4": "4242",\n                        "card_scheme": "visa",\n                        "address_country": "AU",\n                        "expire_month": 1,\n                        "expire_year": 2024,\n                        "status": "active",\n                        "created_at": "2023-10-16T02:49:40.858Z",\n                        "updated_at": "2023-10-16T03:04:35.113Z",\n                        "ref_token": "9951734555266497"\n                    },\n                    {\n                        "_id": "652ca843f7d208c9ce2041a3",\n                        "type": "card",\n                        "gateway_id": "65235b464771c64d6774b38d",\n                        "vault_token": "6ed8778e-c43a-4d44-a189-6fc4f979e7a6",\n                        "card_name": "John Smith",\n                        "card_number_bin": "42424242",\n                        "card_number_last4": "4242",\n                        "card_scheme": "visa",\n                        "address_country": "AU",\n                        "expire_month": 1,\n                        "expire_year": 2024,\n                        "status": "active",\n                        "created_at": "2023-10-16T03:04:35.029Z",\n                        "updated_at": "2023-10-16T03:04:35.113Z",\n                        "ref_token": "9993335068988419"\n                    }\n                ],\n                "payment_destinations": [],\n                "company_id": "65235992df412413b29a8f3b"\n            }\n        ],\n        "skip": 0,\n        "limit": 100,\n        "sortkey": "created_at",\n        "sortdirection": "DESC",\n        "count": 1\n    }\n}\n'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Store the ",(0,a.jsx)(e.code,{children:"resource.data[i]._id"})," along with all of the ",(0,a.jsx)(e.code,{children:"gateway_id"}),",",(0,a.jsx)(e.code,{children:"vault_token"})," from the  ",(0,a.jsx)(e.code,{children:"resource.data[i].payment_sources[i]"})," section of the response. These details will later be used when performing the charge."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Store the ",(0,a.jsx)(e.code,{children:"resource.query_token"})," for use in the ",(0,a.jsx)(e.code,{children:"HtmlPaymentSourceWidget"})," widget."]}),"\n"]}),"\n"]})]})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},5647:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){return(0,a.jsx)(c.Z,{language:"html",children:'\n<form id="paymentForm">\n    <div id="widget"></div>\n    <input name="payment_source_token" id="payment_source_token" type="hidden">\n</form>\n<script src="https://widget.paydock.com/sdk/latest/widget.umd.min.js"><\/script>\n<script>\n    var widget = new paydock.HtmlWidget(\'#widget\', public_key, gateway_id);\n    widget.onFinishInsert(\'input[name="payment_source_token"]\', \'payment_source\');\n    widget.load();\n<\/script>\n'})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s()}},3912:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(5893),r=t(1151),c=t(1648);function s(n){return(0,a.jsx)(c.Z,{language:"html",children:'\n<form id="paymentForm">\n    <div id="widget"></div>\n    <input name="payment_source_token" id="payment_source_token" type="hidden">\n</form>\n<script src="https://widget.paydock.com/sdk/latest/widget.umd.min.js"><\/script>\n<script>\n    var widget = new paydock.HtmlWidget(\'#widget\', public_key, \'not_configured\');\n    widget.onFinishInsert(\'input[name="payment_source_token"]\', \'payment_source\');\n    widget.load();\n<\/script>\n'})}function i(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s()}},756:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>_,toc:()=>h});var a=t(5893),r=t(1151),c=(t(3912),t(5647)),s=(t(6224),t(8778),t(5262),t(2687),t(5474),t(817)),i=t(6657),d=t(1563),o=t(126),l=t(5914);const u={title:"New Payment Source"},p=void 0,_={id:"integration-flows/credit-card/existing-customer/new-payment-source",title:"New Payment Source",description:"Direct Charge",source:"@site/docs/integration-flows/credit-card/existing-customer/new-payment-source.mdx",sourceDirName:"integration-flows/credit-card/existing-customer",slug:"/integration-flows/credit-card/existing-customer/new-payment-source",permalink:"/integration-guides/integration-flows/credit-card/existing-customer/new-payment-source",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"New Payment Source"},sidebar:"docsSidebar",previous:{title:"Default Payment Source",permalink:"/integration-guides/integration-flows/credit-card/existing-customer/default-payment-source"},next:{title:"Non Default Payment Source",permalink:"/integration-guides/integration-flows/credit-card/existing-customer/non-default-payment-source"}},m={},h=[{value:"Direct Charge",id:"direct-charge",level:2},{value:"Create a \u201cSimple Widget\u201d using the Paydock Client-SDK",id:"create-a-simple-widget-using-the-paydock-client-sdk",level:3},{value:"Convert the OTT to a permamnent vault token",id:"convert-the-ott-to-a-permamnent-vault-token",level:3},{value:"Create customer with permanent vault token",id:"create-customer-with-permanent-vault-token",level:3},{value:"Add the new default payment",id:"add-the-new-default-payment",level:3},{value:"Perform a direct charge with the customer_id",id:"perform-a-direct-charge-with-the-customer_id",level:3},{value:"Pre Auth &amp; Capture",id:"pre-auth--capture",level:2},{value:"Create a \u201cSimple Widget\u201d using the Paydock Client-SDK",id:"create-a-simple-widget-using-the-paydock-client-sdk-1",level:3},{value:"Convert the OTT to a permamnent vault token",id:"convert-the-ott-to-a-permamnent-vault-token-1",level:3},{value:"Create customer with permanent vault token",id:"create-customer-with-permanent-vault-token-1",level:3},{value:"Add the new default payment",id:"add-the-new-default-payment-1",level:3},{value:"Create a pre auth &amp; capture using the chosen payment source",id:"create-a-pre-auth--capture-using-the-chosen-payment-source",level:3}];function g(n){const e={h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"direct-charge",children:"Direct Charge"}),"\n",(0,a.jsx)(e.h3,{id:"create-a-simple-widget-using-the-paydock-client-sdk",children:"Create a \u201cSimple Widget\u201d using the Paydock Client-SDK"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"convert-the-ott-to-a-permamnent-vault-token",children:"Convert the OTT to a permamnent vault token"}),"\n",(0,a.jsx)(d.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"create-customer-with-permanent-vault-token",children:"Create customer with permanent vault token"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"If there is no paydock customer created at this point. Please create a customer."}),"\n"]}),"\n",(0,a.jsx)(i.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"add-the-new-default-payment",children:"Add the new default payment"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"perform-a-direct-charge-with-the-customer_id",children:"Perform a direct charge with the customer_id"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(e.h2,{id:"pre-auth--capture",children:"Pre Auth & Capture"}),"\n",(0,a.jsx)(e.h3,{id:"create-a-simple-widget-using-the-paydock-client-sdk-1",children:"Create a \u201cSimple Widget\u201d using the Paydock Client-SDK"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"convert-the-ott-to-a-permamnent-vault-token-1",children:"Convert the OTT to a permamnent vault token"}),"\n",(0,a.jsx)(d.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"create-customer-with-permanent-vault-token-1",children:"Create customer with permanent vault token"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"If there is no paydock customer created at this point. Please create a customer."}),"\n"]}),"\n",(0,a.jsx)(i.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"add-the-new-default-payment-1",children:"Add the new default payment"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(e.h3,{id:"create-a-pre-auth--capture-using-the-chosen-payment-source",children:"Create a pre auth & capture using the chosen payment source"}),"\n",(0,a.jsx)(l.ZP,{})]})}function y(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(g,{...n})}):g(n)}}}]);