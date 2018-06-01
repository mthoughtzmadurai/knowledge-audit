const models = require('../models')
const BaseController = require('./base.controller')

class LookupController extends BaseController {
  constructor(){
    super()

    // set models here for easy stubbing
    
    

    // models to be included on routes
    this.include = [
      // { model: router.models.Building, as: 'buildings',
      // include: [{model: router.models.Category, as: 'category'}],
      // },
    ]

    this.attributes = {
      exclude: [
        /* fields from the DB that should be hidden */
      ]
    }
  }

  async LookupList     (req, res, next) {
    var data = {};

    data = {
        Categories : [
            {
                CategoryName:"Intelligence",
                Id:1,
                SubCategories:[
                    {
                        SubCategoryName:"Domain/Theme",
                        Id:1,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Alternative Project Delivery (APD)",
                                Id:1,
                            },
                            {
                                Value:"AREA Research",
                                Id:2,
                            },
                            {
                                Value:"Center of Excellence",
                                Id:3,
                            },
                            {
                                Value:"Computational Design Initiative (CDI)",
                                Id:4,
                            },
                            {
                                Value:"Corporate",
                                Id:5,
                            },
                            {
                                Value:"Design Excellence Annual Review (DEAR)",
                                Id:6,
                            },
                            {
                                Value:"Design Exchange Program (DX)",
                                Id:7,
                            },
                            {
                                Value:"Design Leadership Council (DLC)",
                                Id:8,
                            },
                            {
                                Value:"Digital Practice Group",
                                Id:9,
                            },
                            {
                                Value:"Diveristy Council",
                                Id:10,
                            },
                            {
                                Value:"Excellence in Education",
                                Id:11,
                            },
                            {
                                Value:"Executive Committee (ExCom)",
                                Id:12,
                            },
                            {
                                Value:"Finance",
                                Id:13,
                            },
                            {
                                Value:"Global Practice Leaders (GPL)",
                                Id:14,
                            },
                            {
                                Value:"Health + Wellness",
                                Id:15,
                            },
                            {
                                Value:"Human Resources",
                                Id:16,
                            },
                            {
                                Value:"Innovation Innvator",
                                Id:17,
                            },
                            {
                                Value:"Interest Group",
                                Id:18,
                            },
                            {
                                Value:"Intern Development Program (IDP)",
                                Id:19,
                            },
                            {
                                Value:"IT",
                                Id:20,
                            },
                            {
                                Value:"I/O",
                                Id:21,
                            },
                            {
                                Value:"Knowledge Management",
                                Id:22,
                            },
                            {
                                Value:"Leaders",
                                Id:23,
                            },
                            {
                                Value:"Leadership Institute",
                                Id:24,
                            },
                            {
                                Value:"Learning + Development",
                                Id:25,
                            },
                            {
                                Value:"Legal",
                                Id:26,
                            },
                            {
                                Value:"Marketing",
                                Id:27,
                            },
                            {
                                Value:"Office",
                                Id:28,
                            },
                            {
                                Value:"Operations",
                                Id:29,
                            },
                            {
                                Value:"People",
                                Id:30,
                            },
                            {
                                Value:"Practice Area",
                                Id:31,
                            },
                            {
                                Value:"Procurment",
                                Id:32,
                            },
                            {
                                Value:"Project",
                                Id:33,
                            },
                            {
                                Value:"Project Delivery Council (PDC)",
                                Id:34,
                            },
                            {
                                Value:"Project Management Community (PMC)",
                                Id:35,
                            },
                            {
                                Value:"Region",
                                Id:36,
                            },
                            {
                                Value:"Research",
                                Id:37,
                            },
                            {
                                Value:"Research Labs",
                                Id:38,
                            },
                            {
                                Value:"Social Responsibility Initiative (SRI)",
                                Id:39,
                            },
                            {
                                Value:"Sustainability Council",
                                Id:40,
                            },
                            {
                                Value:"Sustainable Design Initiative (SDI)",
                                Id:41,
                            },
                            {
                                Value:"Task Force",
                                Id:42,
                            },
                            {
                                Value:"Technical Design Community (TDC)",
                                Id:43,
                            },
                            {
                                Value:"Other",
                                Id:44,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Topic",
                        Id:2,
                        Type:"Text",
                        Data:[
                           
                        ]
                    }
                ]
            },
            {
                CategoryName:"Practice",
                Id:1,
                SubCategories:[
                    {
                        SubCategoryName:"Office(s)",
                        Id:3,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Atlanta",
                                Id:45,
                            },
                            {
                                Value:"Austin",
                                Id:46,
                            },
                            {
                                Value:"Boston",
                                Id:47,
                            },
                            {
                                Value:"Charlotte",
                                Id:48,
                            },
                            {
                                Value:"Chicago",
                                Id:49,
                            },
                            {
                                Value:"Copenhagen",
                                Id:50,
                            },
                            {
                                Value:"Dallas",
                                Id:51,
                            },
                            {
                                Value:"Denver",
                                Id:52,
                            },
                            {
                                Value:"Dubai",
                                Id:53,
                            },
                            {
                                Value:"Durham",
                                Id:54,
                            },
                            {
                                Value:"Houston",
                                Id:55,
                            },
                            {
                                Value:"London",
                                Id:56,
                            },
                            {
                                Value:"Los Angels",
                                Id:57,
                            },
                            {
                                Value:"Miami",
                                Id:58,
                            },
                            {
                                Value:"Minneapolis",
                                Id:59,
                            },
                            {
                                Value:"New York",
                                Id:60,
                            },
                            {
                                Value:"Ottawa",
                                Id:61,
                            },
                            {
                                Value:"San Francisco",
                                Id:62,
                            },
                            {
                                Value:"Sao Paulo",
                                Id:63,
                            },
                            {
                                Value:"Seattle",
                                Id:64,
                            },
                            {
                                Value:"Shanghai",
                                Id:65,
                            },
                            {
                                Value:"Toronto",
                                Id:66,
                            },
                            {
                                Value:"Vancouver",
                                Id:67,
                            },
                            {
                                Value:"Washington",
                                Id:68,
                            },
                            {
                                Value:"Unknown",
                                Id:69,
                            },
                            {
                                Value:"N/A",
                                Id:70,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Practice(s)",
                        Id:4,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Cities + Sites (C+S)",
                                Id:71,
                            },
                            {
                                Value:"Civic + Cultural (C+C)",
                                Id:72,
                            },
                            {
                                Value:"Corporate + Commercial (CCC)",
                                Id:73,
                            },
                            {
                                Value:"Corporate Interiors (CI)",
                                Id:74,
                            },
                            {
                                Value:"Healthcare (HC)",
                                Id:75,
                            },
                            {
                                Value:"K-12 (K12)",
                                Id:76,
                            },
                            {
                                Value:"Science + Technology (S+T)",
                                Id:77,
                            },
                            {
                                Value:"Sports, Recreation + Entertainment (SRE)",
                                Id:78,
                            },
                            {
                                Value:"Transportation",
                                Id:79,
                            },
                            {
                                Value:"Unknown,",
                                Id:80,
                            },
                            {
                                Value:"N/A",
                                Id:81,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Service(s)",
                        Id:5,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Architecture",
                                Id:82,
                            },
                            {
                                Value:"Branded Environments",
                                Id:83,
                            },
                            {
                                Value:"Interior Design",
                                Id:84,
                            },
                            {
                                Value:"Landscape Architecture",
                                Id:85,
                            },
                            {
                                Value:"Planning + Strategies",
                                Id:86,
                            },
                            {
                                Value:"Reuse + Transformation",
                                Id:87,
                            },
                            {
                                Value:"Urban Design",
                                Id:88,
                            },
                            {
                                Value:"Unknown",
                                Id:89,
                            },
                            {
                                Value:"N/A",
                                Id:90,
                            }
                        ]
                    }
                ]
            },
            {
                CategoryName:"People",
                Id:3,
                SubCategories:[
                    {
                        SubCategoryName:"Leader(s)",
                        Id:6,
                        Type:"Employees",
                        Data:[
                        ]
                    },
                    {
                        SubCategoryName:"Broker(s)",
                        Id:7,
                        Type:"Employees",
                        Data:[
                        ]
                    },
                    {
                        SubCategoryName:"Stakeholder(s)",
                        Id:8,
                        Type:"Employees",
                        Data:[
                        ]
                    }
                ]
            },
            {
                CategoryName:"Core characteristics",
                Id:4,
                SubCategories:[
                    {
                        SubCategoryName:"Structure",
                        Id:9,
                        Type:"Single",
                        Data:[
                            {
                                Value:"Highly unstructured",
                                Id:91,
                            },
                            {
                                Value:"Uncodified",
                                Id:92,
                            },
                            {
                                Value:"Partially Codified",
                                Id:93,
                            },
                            {
                                Value:"Codified",
                                Id:94,
                            },
                            {
                                Value:"Highly Structured",
                                Id:95,
                            },
                            {
                                Value:"Unknown",
                                Id:96,
                            },
                            {
                                Value:"N/A",
                                Id:97,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Diffusion",
                        Id:10,
                        Type:"Single",
                        Data:[
                            {
                                Value:"Highly undiffused",
                                Id:98,
                            },
                            {
                                Value:"Undiffused",
                                Id:99,
                            },
                            {
                                Value:"Partially diffused",
                                Id:100,
                            },
                            {
                                Value:"Diffused",
                                Id:101,
                            },
                            {
                                Value:"Highly diffused",
                                Id:102,
                            },
                            {
                                Value:"Unknown",
                                Id:103,
                            },
                            {
                                Value:"N/A",
                                Id:104,
                            }
                        ]
                    }
                ]
            },
            {
                CategoryName:"Strategic alignment",
                Id:5,
                SubCategories:[
                    {
                        SubCategoryName:"Alignment with SAP objectives",
                        Id:11,
                        Type:"Single",
                        Data:[
                            {
                                Value:"Highly reactive",
                                Id:105,
                            },
                            {
                                Value:"Reactive",
                                Id:106,
                            },
                            {
                                Value:"Partially Strategic",
                                Id:107,
                            },
                            {
                                Value:"Strategic",
                                Id:108,
                            },
                            {
                                Value:"Highly strategic",
                                Id:109,
                            },
                            {
                                Value:"Unknown",
                                Id:110,
                            },
                            {
                                Value:"N/A",
                                Id:111,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"SAP theme(s)",
                        Id:12,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Client Engagement",
                                Id:112,
                            },
                            {
                                Value:"Design Excellence",
                                Id:113,
                            },
                            {
                                Value:"Execution",
                                Id:114,
                            },
                            {
                                Value:"Financial Performance",
                                Id:115,
                            },
                            {
                                Value:"Knowledge + Innovation",
                                Id:116,
                            },
                            {
                                Value:"Talent",
                                Id:117,
                            },
                            {
                                Value:"Unknown",
                                Id:118,
                            },
                            {
                                Value:"N/A",
                                Id:119,
                            }
                        ]
                    }
                ]
            },
            {
                CategoryName:"Technology",
                Id:6,
                SubCategories:[
                    {
                        SubCategoryName:"Origination(s)",
                        Id:13,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"None",
                                Id:120,
                            },
                            {
                                Value:"AREA Research",
                                Id:121,
                            },
                            {
                                Value:"HUb",
                                Id:122,
                            },
                            {
                                Value:"Innovation Incubator",
                                Id:123,
                            },
                            {
                                Value:"Knowledge Index",
                                Id:124,
                            },
                            {
                                Value:"microKnowledge",
                                Id:125,
                            },
                            {
                                Value:"P+W Blog",
                                Id:126,
                            },
                            {
                                Value:"P+W Research",
                                Id:127,
                            },
                            {
                                Value:"P+W Social Media",
                                Id:128,
                            },
                            {
                                Value:"P+W website",
                                Id:129,
                            },
                            {
                                Value:"Pulse",
                                Id:130,
                            },
                            {
                                Value:"Risk Assessment Management Platform",
                                Id:131,
                            },
                            {
                                Value:"Tableau",
                                Id:132,
                            },
                            {
                                Value:"Thrive",
                                Id:133,
                            },
                            {
                                Value:"Other",
                                Id:134,
                            },
                            {
                                Value:"Unknown",
                                Id:135,
                            },
                            {
                                Value:"N/A",
                                Id:136,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Destination(s)",
                        Id:14,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"None",
                                Id:137,
                            },
                            {
                                Value:"AREA Research",
                                Id:138,
                            },
                            {
                                Value:"HUb",
                                Id:139,
                            },
                            {
                                Value:"Innovation Incubator",
                                Id:140,
                            },
                            {
                                Value:"Knowledge Index",
                                Id:141,
                            },
                            {
                                Value:"microKnowledge",
                                Id:142,
                            },
                            {
                                Value:"P+W Blog",
                                Id:143,
                            },
                            {
                                Value:"P+W Research",
                                Id:144,
                            },
                            {
                                Value:"P+W Social Media",
                                Id:145,
                            },
                            {
                                Value:"P+W website",
                                Id:146,
                            },
                            {
                                Value:"Pulse",
                                Id:147,
                            },
                            {
                                Value:"Risk Assessment Management Platform",
                                Id:148,
                            },
                            {
                                Value:"Tableau",
                                Id:149,
                            },
                            {
                                Value:"Thrive",
                                Id:150,
                            },
                            {
                                Value:"Other",
                                Id:151,
                            },
                            {
                                Value:"Unknown",
                                Id:152,
                            },
                            {
                                Value:"N/A",
                                Id:153,
                            }
                        ]
                    }
                ]
            },
            {
                CategoryName:"Assessment",
                Id:7,
                SubCategories:[
                    {
                        SubCategoryName:"Level of maturity",
                        Id:15,
                        Type:"Single",
                        Data:[
                            {
                                Value:"Inactive",
                                Id:154,
                            },
                            {
                                Value:"Initiated",
                                Id:155,
                            },
                            {
                                Value:"Deployed",
                                Id:156,
                            },
                            {
                                Value:"Institutionalized",
                                Id:157,
                            },
                            {
                                Value:"Optimized",
                                Id:158,
                            },
                            {
                                Value:"Unknown",
                                Id:159,
                            },
                            {
                                Value:"N/A",
                                Id:160,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Effectiveness",
                        Id:16,
                        Type:"Single",
                        Data:[
                            {
                                Value:"Highly Innefective",
                                Id:161,
                            },
                            {
                                Value:"Ineffective",
                                Id:162,
                            },
                            {
                                Value:"OK",
                                Id:163,
                            },
                            {
                                Value:"Effective",
                                Id:164,
                            },
                            {
                                Value:"Highly Effective",
                                Id:165,
                            },
                            {
                                Value:"Unknown",
                                Id:166,
                            },
                            {
                                Value:"N/A",
                                Id:167,
                            }
                        ]
                    },
                    {
                        SubCategoryName:"Process Problem(s)",
                        Id:17,
                        Type:"Multiple",
                        Data:[
                            {
                                Value:"Identification",
                                Id:168,
                            },
                            {
                                Value:"Creation",
                                Id:169,
                            },
                            {
                                Value:"Motivation / Incentivization",
                                Id:170,
                            },
                            {
                                Value:"Collection / Capture",
                                Id:171,
                            },
                            {
                                Value:"Codification",
                                Id:172,
                            },
                            {
                                Value:"Storage",
                                Id:173,
                            },
                            {
                                Value:"Accessibility",
                                Id:174,
                            },
                            {
                                Value:"Prioritization",
                                Id:175,
                            },
                            {
                                Value:"Deployment",
                                Id:176,
                            },
                            {
                                Value:"Sharing",
                                Id:177,
                            },
                            {
                                Value:"Application",
                                Id:178,
                            },
                            {
                                Value:"Measurement",
                                Id:179,
                            },
                            {
                                Value:"Disposal",
                                Id:180,
                            }
                        ]
                    }
                ]
            },
            {
                CategoryName:"Other",
                Id:8,
                SubCategories:[
                    {
                        SubCategoryName:"Notes",
                        Id:18,
                        Type:"Text",
                        Data:[
                           
                        ]
                    }
                ]
            }
        ]
    }
    return res.send(data)
  }


}

module.exports = LookupController
