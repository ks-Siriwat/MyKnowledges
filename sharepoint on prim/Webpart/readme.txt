สิ่งที่ต้อง setup ก่อนใช้งาน

################## HTML ##################
nav center

<li id="home" role="none"> <- li parent
    <a  href="#"                # ไม้ต้องแก้
        role="menuitem"         # ไม้ต้องแก้
        class="nav-link"        # ไม้ต้องแก้
        data-parent-id="#home" <- ให้ชี้ไปที่ li ตัว parent
        data-target="#MSOZoneCell_WebPartWPQ6, #MSOZoneCell_WebPartWPQ7"> <- section ที่ต้องการเปิด
        Home <- ชื่อ tab
    </a>
</li>


<li id="services" class="dropdown" role="menuitem"> <- li parent
    <a  href="#"                # ไม้ต้องแก้
        class="dropdown-toggle" # ไม้ต้องแก้
        aria-haspopup="true"    # ไม้ต้องแก้
        aria-expanded="false">  # ไม้ต้องแก้
        Services ▾ <- ชื่อ tab
    </a>
    <div class="dropdown-template">
        <a  href="#"                    # ไม้ต้องแก้
            class="nav-link"            # ไม้ต้องแก้
            data-parent-id="#services"  # ไม้ต้องแก้
            data-target="#MSOZoneCell_WebPartWPQ5"> <- section ที่ต้องการเปิด
            Service 1 <- ชื่อ dropdown
        </a>
        <a  href="#"                    # ไม้ต้องแก้
            class="nav-link"            # ไม้ต้องแก้
            data-parent-id="#services"  # ไม้ต้องแก้
            data-target="#MSOZoneCell_WebPartWPQ5, #MSOZoneCell_WebPartWPQ4"> <- section ที่ต้องการเปิด
            Service 2 <- ชื่อ dropdown
        </a>
    </div>
</li>

############ JavaScript ############

window.AppName = 'Application Name'; <- แก้ชื่อ app

################ CSS ###############

search คำนี้ แล้วแก้ id ให้ตรงกับ webpart component id -> /* Webpart Component ID มาแก้ตรงนี้ */