/*****************************************************************************
Plumsail Forms Template for any Sharepoint Project
******************************************************************************/
window.$ = $;
window.fd = fd;
window.pnp = pnp;

window.userLogin = {
    Id: _spPageContextInfo.userId,
    DisplayName: _spPageContextInfo.userDisplayName,
    LoginName: _spPageContextInfo.userLoginName,
    Key: _spPageContextInfo.systemUserKey,
    Email: _spPageContextInfo.userEmail
}

window.sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function safeParseAny(value, fallback = null) {
    try {
        if (value == null) return fallback;
        if (typeof value === 'object') return value;
        if (typeof value === 'number' || typeof value === 'boolean') return value;
        if (typeof value === 'string' && value.trim() !== '') {
            return JSON.parse(value);
        }
        return fallback;
    } catch {
        return fallback;
    }
}

window.getItemsFrom = async function (listName, conditions = {}) {
    let q = pnp.sp.web.lists.getByTitle(listName).items;

    if (conditions.select?.length) q = q.select(...conditions.select);
    if (conditions.filter) q = q.filter(conditions.filter);
    if (conditions.top) q = q.top(conditions.top);

    if (Array.isArray(conditions.orderBy)) {
        conditions.orderBy.forEach(o => {
            q = q.orderBy(o.field, !o.desc);
        });
    }

    return await q.get();
};

fd.spBeforeRender(function () {
}); // End fd.spBeforeRender

fd.spRendered(async function () {

    //set Field Apperence
    await sleep(1_200);
    console.clear();

    /**************************ONLOAD*****************************/
    console.log("hi", userLogin.DisplayName || null);
    console.groupCollapsed('userLogin Detail');
    console.log("Id :", userLogin.Id || null);
    console.log("LoginName :", userLogin.LoginName || null);
    console.log("Key :", userLogin.Key || null);
    console.log("Email :", userLogin.Email || null);
    console.groupEnd('userLogin Detail');

    // ############ example get items #############
    await getItemsFrom('EquipmentStatusLogs', {
        select: ['EquipmentCode', 'NewStatus', 'StatusChangeDate'],
        filter: `StatusChangeDate le datetime'${new Date().toISOString()}'`,
        orderBy: [
            { field: 'EquipmentCode', desc: false },
            { field: 'StatusChangeDate', desc: true }
        ]
    });

    /**************************ONCHANGE**************************/

}); // end fd.spRendered

fd.spBeforeSave(async function () {
}); // End fd.spBeforeSave

fd.spSaved(function (result) {
}); // End fd.spSaved