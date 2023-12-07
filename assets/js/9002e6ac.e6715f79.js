"use strict";(self.webpackChunkpaydock_integration_guides=self.webpackChunkpaydock_integration_guides||[]).push([[12],{3899:(n,e,t)=>{t.d(e,{ZP:()=>r});var o=t(5893),a=t(1151),i=t(1648);function s(n){const e={code:"code",li:"li",ul:"ul",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Using the ",(0,o.jsx)(e.code,{children:"one time token"}),". Create a charge request"]}),"\n"]}),"\n",(0,o.jsx)(i.Z,{language:"http",children:'\nPOST /v1/charges HTTP/1.1\nHost: api.paydock.com\nx-user-secret-key: {{secret-key}}\nContent-Type: application/json\n\n{\n    "amount": "10.00",\n    "currency": "AUD",\n    "token": "996280fe-961c-4f84-9e99-e490402c48b1"\n}\n'}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Sample charge response"}),"\n"]}),"\n",(0,o.jsx)(i.Z,{language:"json",children:'\n{\n    "status": 201,\n    "error": null,\n    "resource": {\n        "type": "charge",\n        "data": {\n            "transfer": {\n                "items": []\n            },\n            "schedule": {\n                "stopped": false\n            },\n            "statistics": {\n                "total_refunded_amount": 0,\n                "full_refund": false,\n                "need_sync": true\n            },\n            "customer": {\n                "payment_source": {\n                    "type": "checkout",\n                    "gateway_id": "656fc5d78241d053bc56bc38",\n                    "gateway_name": "Zip Money",\n                    "gateway_type": "Zipmoney",\n                    "ref_token": "type:Y2hlY2tvdXRfaWQ=.token:Y29fNlVNUXZSVlVwTlh1MEtPUHpWYWwwVw==",\n                    "address_line1": "Suite 660",\n                    "address_line2": "test",\n                    "address_city": "Sydney",\n                    "address_postcode": "3223",\n                    "address_state": "LA",\n                    "address_country": "AU",\n                    "items": []\n                },\n                "first_name": "Joshua",\n                "last_name": "Wood",\n                "email": "joshuawood@hotmail.com.au"\n            },\n            "shipping": {\n                "type": "delivery",\n                "address_line1": "Suite 660",\n                "address_line2": "822 Ruiz Square",\n                "address_country": "AU",\n                "address_postcode": "3223",\n                "address_city": "Sydney",\n                "address_state": "LA"\n            },\n            "type": "financial",\n            "status": "complete",\n            "capture": true,\n            "authorization": false,\n            "archived": false,\n            "one_off": true,\n            "_source_ip_address": "x.x.x.x",\n            "_id": "657132cb0b76c9392bf652c8",\n            "amount": 4,\n            "currency": "AUD",\n            "items": [],\n            "transactions": [\n                {\n                    "type": "sale",\n                    "status": "complete",\n                    "_source_ip_address": "x.x.x.x",\n                    "gateway_specific_code": null,\n                    "gateway_specific_description": null,\n                    "error_message": null,\n                    "error_code": null,\n                    "status_code": null,\n                    "status_code_description": null,\n                    "include_authorization": false,\n                    "_id": "657132cb0b76c9392bf652c9",\n                    "currency": "AUD",\n                    "amount": 4,\n                    "amount_fee": null,\n                    "amount_surcharge": null,\n                    "amount_original": null,\n                    "created_at": "2023-12-07T02:49:47.557Z",\n                    "external_id": "ch_zg064wd75yogdnl",\n                    "external_reference": "5148227",\n                    "processed_at": "2023-12-07T02:49:49.356Z"\n                }\n            ],\n            "company_id": "65235992df412413b29a8f3b",\n            "amount_surcharge": null,\n            "amount_original": null,\n            "updated_at": "2023-12-07T02:49:49.356Z",\n            "created_at": "2023-12-07T02:49:47.557Z",\n            "__v": 0,\n            "external_id": "ch_zg064wd75yogdnl"\n        }\n    }\n}\n'})]})}function r(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},643:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>_,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var o=t(5893),a=t(1151),i=t(3899),s=t(1648);function r(n){const e={img:"img",p:"p",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{language:"html",children:'\n<html>\n    <body>\n        <input type="text" class="form-control" id="zipmoney-checkout-button-payment-source-token" hidden>\n        <button class="btn mb-3 widget-button hidden" id="zipmoney-checkout-button">\n            <img src="img/zipmoney.png" width="150px" />\n        </button>\n    </body>\n</html>\n<script src="https://widget.paydock.com/sdk/latest/widget.umd.min.js"><\/script>\n<script>\n    var button = new paydock.ZipmoneyCheckoutButton(\'#zipmoney-checkout-button\', public_key, gateway_id);\n    button.setEnv(\'sandbox\');\n    button.onFinishInsert(\'input[id="zipmoney-checkout-button-payment-source-token"]\', \'payment_source_token\');\n    button.setMeta({\n        "first_name": "Joshua",\n        "tokenize": true,\n        "last_name": "Wood",\n        "email": "joshuawood@hotmail.com.au",\n        "gender": "male",\n        "charge": {\n            "amount": "4",\n            "currency": "AUD",\n            "shipping_type": "delivery",\n            "shipping_address": {\n                "first_name": "Joshua",\n                "last_name": "Wood",\n                "line1": "Suite 660",\n                "line2": "822 Ruiz Square",\n                "country": "AU",\n                "postcode": "3223",\n                "city": "Sydney",\n                "state": "LA"\n            },\n            "billing_address": {\n                "first_name": "Joshua",\n                "last_name": "Wood",\n                "line1": "Suite 660",\n                "line2": "test",\n                "country": "AU",\n                "postcode": "3223",\n                "city": "Sydney",\n                "state": "LA"\n            },\n            "items": [\n                {\n                    "name": "ACME Toolbox",\n                    "amount": "2",\n                    "quantity": 1,\n                    "reference": "Fuga consequuntur sint ab magnam"\n                },\n                {\n                    "name": "Device 42",\n                    "amount": "2",\n                    "quantity": 1,\n                    "reference": "Fuga consequuntur sint ab magnam"\n                }\n            ]\n        },\n        "statistics": {\n            "account_created": "2017-05-05",\n            "sales_total_number": "5",\n            "sales_total_amount": "4",\n            "sales_avg_value": "45",\n            "sales_max_value": "400",\n            "refunds_total_amount": "21",\n            "previous_chargeback": "true",\n            "currency": "AUD",\n            "last_login": "2017-06-01"\n        }\n    });\n\n    button.on(\'finish\', function (data) {\n        console.log(\'on:finish\', data);\n    });\n<\/script>\n'}),"\n",(0,o.jsx)(e.p,{children:"You will then receive the widget looking like this"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"zipmoney-checkout-button",src:t(6833).Z+"",width:"376",height:"154"})})]})}function c(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}const u={title:"ZipMoney",description:"This document will guide you on how to integrate Afterpay."},l=void 0,d={id:"integration-flows/wallet/zipmoney",title:"ZipMoney",description:"This document will guide you on how to integrate Afterpay.",source:"@site/docs/integration-flows/wallet/zipmoney.mdx",sourceDirName:"integration-flows/wallet",slug:"/integration-flows/wallet/zipmoney",permalink:"/integration-guides/integration-flows/wallet/zipmoney",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ZipMoney",description:"This document will guide you on how to integrate Afterpay."},sidebar:"docsSidebar",previous:{title:"PayPal",permalink:"/integration-guides/integration-flows/wallet/paypal"},next:{title:"Reversal",permalink:"/integration-guides/category/reversal"}},p={},h=[{value:"Load the checkout button",id:"load-the-checkout-button",level:3},{value:"Perform the charge with the OTT",id:"perform-the-charge-with-the-ott",level:3}];function m(n){const e={h3:"h3",p:"p",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"This document will guide you on how to integrate Afterpay."}),"\n",(0,o.jsx)(e.h3,{id:"load-the-checkout-button",children:"Load the checkout button"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{id:"perform-the-charge-with-the-ott",children:"Perform the charge with the OTT"}),"\n",(0,o.jsx)(i.ZP,{})]})}function _(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},6833:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/zipmoney-checkout-button-4576f87ac7c3976a5b05a47934c39422.png"}}]);