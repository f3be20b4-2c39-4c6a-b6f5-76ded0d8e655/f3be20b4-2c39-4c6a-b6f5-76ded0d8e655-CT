const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKMOONICON,(ELEMENTSS)=>{

            CHANGEMODE(ELEMENTSS);

        });

        RIGHTTEXTVIEW(ELEMENT,"Book Now",(ELEMENTSS)=>{

            COLOR(ELEMENTSS,WHITE);

            BACKGROUND(ELEMENTSS,ORANGE);

            RADIUS(ELEMENTSS,"5px");

            PADDING(ELEMENTSS,"2%");

            FORWARDNAV(ELEMENTSS,MOBILEABOUTUSPAGE,MOBILEVIEW);

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT)

        TEXTVIEW(ELEMENT,"WHO WE ARE?",()=>{

        });

        BREAK(ELEMENT);

        LEFTTEXTVIEW(ELEMENT,"Erandix empowers businesses to turn challenges into opportunities. As a B2B software development partner, we leverage advanced cloud‑native technology to streamline operations, unlock efficiency, and accelerate growth. Our solutions aren’t just about innovation — they’re about impact. By aligning technology with your business goals, we help you reduce costs, maximize returns, and drive profitability. With Erandix, you gain a partner committed to measurable results and long‑term success",(ELS)=>{

            FONTSIZE(ELS,"18px");
            TEXTALIGN(ELS,"Left");
            WIDTH(ELS,"90%");
            MARGINLEFT(ELS,"2%");

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Imagine",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Imagine",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            TOP(LOAD,"50%");

                            SERVERASSETS("Policies/Main/Imagine.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

            });

            TEXTVIEW(ELEMENTS,"Build",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Build",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            TOP(LOAD,"50%");

                            SERVERASSETS("Policies/Main/Build.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

            });

            TEXTVIEW(ELEMENTS,"Inspire",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Inspire",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            TOP(LOAD,"50%");

                            SERVERASSETS("Policies/Main/Inspire.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

            });

        });

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            RADIUS(ELEMENTS,"0");

            SERVERCOMPONENTS("Images/AppDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELIS)=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"App Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","App Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        TOP(LOAD,"50%");

                        SERVERASSETS("Policies/Main/AppDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/DesktopDevelopment.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"Desktop Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","Desktop Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        TOP(LOAD,"50%");

                        SERVERASSETS("Policies/Main/DesktopDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/WebDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"WebSite Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","WebSite Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        TOP(LOAD,"50%");

                        SERVERASSETS("Policies/Main/WebDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/SystemDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"System Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","System Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        TOP(LOAD,"50%");

                        SERVERASSETS("Policies/Main/SystemDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Policies",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILEPOLICY,MOBILEVIEW);

            });

            TEXTVIEW(ELEMENTS,"Apps",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILEAPPS,MOBILEVIEW);

            });

            TEXTVIEW(ELEMENTS,"Contact Us",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILECONTACTUS,MOBILEVIEW);

            });

        });

    });

};

const MOBILEABOUTUSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Listing",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"WEB PACKAGE PRICING",()=>{

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","400px",TRANSPARENT,"",(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            OVERFLOWX(ELEMENTS);

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                MARGIN(ELEMENTAS,"2%");

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Starter",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Website "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"1",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 1,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Business",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Website "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"3",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Admin Panel ",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 3,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Enterprise",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Website "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"5",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Maintence",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 7,500,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });
            
        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"MOBILE PACKAGE PRICING",()=>{

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","400px",TRANSPARENT,"",(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            OVERFLOWX(ELEMENTS);

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                MARGIN(ELEMENTAS,"2%");

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Starter",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"1",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 3,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Business",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"2",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Admin Panel ",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 6,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Enterprise",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"App "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"3",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Maintence",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 15,700,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });
            
        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"DESKTOP PACKAGE PRICING",()=>{

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","400px",TRANSPARENT,"",(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            OVERFLOWX(ELEMENTS);

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                MARGIN(ELEMENTAS,"2%");

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Starter",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"1",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 3,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Business",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"2",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Admin Panel ",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 6,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Enterprise",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"App "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"3",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Maintence",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 15,700,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });
            
        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"SYSTEM PACKAGE PRICING",()=>{

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","400px",TRANSPARENT,"",(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            OVERFLOWX(ELEMENTS);

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                MARGIN(ELEMENTAS,"2%");

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Starter",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"1",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 5,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Business",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Apps "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"2",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Admin Panel ",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 17,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });

            DIVVIEW(ELEMENTS,"50%","390px",BLUE+"50",(ELEMENTAS)=>{

                FLEXSHRINK(ELEMENTAS);

                RADIUS(ELEMENTAS,"10px");

                BREAK(ELEMENTAS);

                MARGIN(ELEMENTAS,"2%");

                TEXTVIEW(ELEMENTAS,"Enterprise",()=>{

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Package Features",()=>{

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"App "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"3",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Hosting "+DOUBLEARROW,()=>{

                    });

                    RIGHTTEXTVIEW(ELS,"Annual",()=>{

                    });

                });

                INLINEVIEW(ELEMENTAS,"","50px",TRANSPARENT,"",(ELS)=>{

                    LEFTTEXTVIEW(ELS,"Free Maintence",()=>{

                    });

                });

                CONDITION(localStorage.getItem("TIMEZONE") === '"Africa/Kampala"',()=>{

                    TEXTVIEW(ELEMENTAS,"UGX : 30,000,000",()=>{

                    });

                },()=>{

                    TEXTVIEW(ELEMENTAS,"USD : 280",()=>{

                    });

                });

                BREAK(ELEMENTAS);

                BUTTON(ELEMENTAS,"PAY",GREEN,(EES)=>{

                    RADIUS(EES,"5px");
                    HEIGHT(EES,"30px");

                });

                BREAK(ELEMENTAS);

                TEXTVIEW(ELEMENTAS,"Details",(ES)=>{

                    FONTSIZE(ES,"16px");

                });

            });
            
        });

    });

};

const MOBILECONTACTUS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTSS)=>{

            BACKNAV(ELEMENTSS,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Contact Us",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"Fill The Form Below",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Your Name","Name",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"email","Enter Your Email","Email",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"","Subject Of Message","Subject",()=>{

        });

        BREAK(ELEMENT);

        ROUNDTEXTAREAVIEW(ELEMENT,"Enter Your Message","Message",()=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Submit",FORESTGREEN,(ELSEE)=>{

            CLICK(ELSEE,()=>{

                TOASTCONDITION(sessionStorage.getItem("Name"),"Enter Your Name",()=>{

                    TOASTCONDITION(sessionStorage.getItem("Email"),"Enter Your Email",()=>{

                        TOASTCONDITION(sessionStorage.getItem("Subject"),"Enter Your Subject",()=>{

                            TOASTCONDITION(sessionStorage.getItem("Message"),"Compose The Message",()=>{

                                TOASTVIEW("Please Wait");

                            });    
    
                        });    

                    });

                });

            });

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        LINE(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"OR",()=>{

        });

        BREAK(ELEMENT);

        LINE(ELEMENT);

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","100px",TRANSPARENT,"",(ELSE)=>{

            ICONVIEW(ELSE,COLOREDINSTAGRAM,COLOREDINSTAGRAM,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

            ICONVIEW(ELSE,WHITEGMAILICON,WHITEGMAILICON,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

            ICONVIEW(ELSE,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,COPYRIGHT+"ERANDIX 2026",()=>{

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

    });

};

const MOBILEAPPS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Apps",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const MOBILEPOLICY=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Terms and Conditions",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

            SERVERASSETS("Policies/Main/Main.txt",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                DISPLAY(ELEMENT,Data);

            });

        });

    });

};

const DESKTOPVIEW=()=>{

    CLEARNAV();

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        DIVVIEW(ELEMENT,"70%","",TRANSPARENT,(ELEMENTS)=>{

            POSITIONABSOLUTE(ELEMENTS);
            RIGHT(ELEMENTS,"");
            DISPLAYFLEX(ELEMENTS);

            LEFTICONVIEW(ELEMENTS,WHITESUNICON,BLACKSUNICON,(ELS)=>{

                CHANGEMODE(ELS);

            });

            TEXTVIEW(ELEMENTS,"Apps",(ELS)=>{

                FORWARDNAV(ELS,DESKTOPAPPSPAGE,DESKTOPVIEW);

            });

            TEXTVIEW(ELEMENTS,"About Us",(ELS)=>{

                FORWARDNAV(ELS,DESKTOPABOUTUSPAGE,DESKTOPVIEW);

            });

            TEXTVIEW(ELEMENTS,"Contact Us",(ELS)=>{

                FORWARDNAV(ELS,DESKTOPCONTACTUS,DESKTOPVIEW);

            });

        });

    },(ELEMENTS)=>{

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"85%","auto",TRANSPARENT,(ELEMENT)=>{

            BREAK(ELEMENT);

            DIVVIEW(ELEMENT,"40%","30%",TRANSPARENT,(ELEMENTS)=>{
    
                OVERFLOWHIDDEN(ELEMENTS);
    
                IMAGE(ELEMENTS,"","",ERANDIXLOGO,TRANSPARENT,(ELSS)=>{
    
                    RADIUS(ELSS,"20px");
    
                });
    
            });
    
            BREAK(ELEMENT);
    
            TEXTVIEW(ELEMENT,"ERANDIX",()=>{
    
            });
    
            BREAK(ELEMENT);
    
            TEXTVIEW(ELEMENT,"Erandix is a Software Development Company that Ventures in Website Development,Mobile App Development,Desktop Software Development and System Development.",(ELEMENTAS)=>{
    
                TEXTALIGN(ELEMENTAS,"Left");
                MARGINLEFT(ELEMENTAS,"2%");
    
            });

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,COPYRIGHT+" ERANDIX 2026",()=>{

            });

        });

    });

};

const DESKTOPABOUTUSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,DESKTOPVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"About Us",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const DESKTOPAPPSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,DESKTOPVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Apps",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const DESKTOPCONTACTUS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTSS)=>{

            BACKNAV(ELEMENTSS,DESKTOPVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Contact Us",()=>{

        });

    },(ELEMENTAS)=>{

        DIVVIEW(ELEMENTAS,"80%","auto",TRANSPARENT,(ELEMENT)=>{

            MARGIN(ELEMENT,"5% 10%");

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,"Fill The Form Below",()=>{

            });

            BREAK(ELEMENT);

            ROUNDINPUTVIEW(ELEMENT,"text","Enter Your Name","Name",()=>{

            });

            BREAK(ELEMENT);

            ROUNDINPUTVIEW(ELEMENT,"email","Enter Your Email","Email",()=>{

            });

            BREAK(ELEMENT);

            ROUNDINPUTVIEW(ELEMENT,"","Subject Of Message","Subject",()=>{

            });

            BREAK(ELEMENT);

            ROUNDTEXTAREAVIEW(ELEMENT,"Enter Your Message","Message",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Submit",FORESTGREEN,(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    TOASTCONDITION(sessionStorage.getItem("Name"),"Enter Your Name",()=>{

                        TOASTCONDITION(sessionStorage.getItem("Email"),"Enter Your Email",()=>{

                            TOASTCONDITION(sessionStorage.getItem("Subject"),"Enter Your Subject",()=>{

                                TOASTCONDITION(sessionStorage.getItem("Message"),"Compose The Message",()=>{

                                    TOASTVIEW("Please Wait");

                                });    
        
                            });    

                        });

                    });

                });

            });

            BREAK(ELEMENT);

            BREAK(ELEMENT);

            BREAK(ELEMENT);

            LINE(ELEMENT);

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,"OR",()=>{

            });

            BREAK(ELEMENT);

            LINE(ELEMENT);

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENT,"","100px",TRANSPARENT,"",(ELSE)=>{

                ICONVIEW(ELSE,COLOREDINSTAGRAM,COLOREDINSTAGRAM,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"100xp");
                    HEIGHT(ELEMENTSS,"100xp");

                });

                ICONVIEW(ELSE,WHITEGMAILICON,WHITEGMAILICON,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"100xp");
                    HEIGHT(ELEMENTSS,"100xp");

                });

                ICONVIEW(ELSE,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"100xp");
                    HEIGHT(ELEMENTSS,"100xp");

                });

            });

            BREAK(ELEMENT);

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,COPYRIGHT+"ERANDIX 2026",()=>{

            });
            
        });

    });

};