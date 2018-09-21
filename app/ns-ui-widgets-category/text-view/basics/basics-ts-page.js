"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("tvHint", "Enter text");
    vm.set("tvText", "");
    vm.set("tvResult", "");
    vm.set("editState", true);
    vm.set("buttonText", "Disable TextView");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "tvText") {
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function textViewEditStateChange(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var editState = vm.get("editState");
    vm.set("editState", !editState);
    if (editState) {
        vm.set("buttonText", "Enable TextView");
    }
    else {
        vm.set("buttonText", "Disable TextView");
    }
}
exports.textViewEditStateChange = textViewEditStateChange;
function showText(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    dialogs.alert("Text: " + vm.get("tvText"))
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.showText = showText;
function onTextViewLoaded(args) {
    var textView = args.object;
    textView.on("textChange", function (args) {
        console.dir(args);
    });
}
exports.onTextViewLoaded = onTextViewLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFnRjtBQUNoRixxREFBdUQ7QUFJdkQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUV6QyxFQUFFLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxrQkFBc0M7UUFDekUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQWZELHdDQWVDO0FBRUQsaUNBQXdDLElBQUk7SUFDeEMsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFL0IsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUM7QUFYRCwwREFXQztBQUVELGtCQUF5QixJQUFJO0lBQ3pCLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRS9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRyxDQUFDO1NBQ3pDLElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFSRCw0QkFRQztBQUNELDBCQUFpQyxJQUFJO0lBQ2pDLElBQU0sUUFBUSxHQUF1QixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUxELDRDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBQcm9wZXJ0eUNoYW5nZURhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7VGV4dFZpZXd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiO1xuLy8gPj4gdGV4dC12aWV3LWJpbmRpbmctY29kZS10c1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJ0dkhpbnRcIiwgXCJFbnRlciB0ZXh0XCIpO1xuICAgIHZtLnNldChcInR2VGV4dFwiLCBcIlwiKTtcbiAgICB2bS5zZXQoXCJ0dlJlc3VsdFwiLCBcIlwiKTtcbiAgICB2bS5zZXQoXCJlZGl0U3RhdGVcIiwgdHJ1ZSk7XG4gICAgdm0uc2V0KFwiYnV0dG9uVGV4dFwiLCBcIkRpc2FibGUgVGV4dFZpZXdcIik7XG4gICAgLy8gaGFuZGxpbmcgVGV4dFZpZXcgdGV4dCBjaGFuZ2VcbiAgICB2bS5vbihPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsIChwcm9wZXJ0eUNoYW5nZURhdGE6IFByb3BlcnR5Q2hhbmdlRGF0YSkgPT4ge1xuICAgICAgICBpZiAocHJvcGVydHlDaGFuZ2VEYXRhLnByb3BlcnR5TmFtZSA9PT0gXCJ0dlRleHRcIikge1xuICAgICAgICAgICAgdm0uc2V0KFwidHZSZXN1bHRcIiwgcHJvcGVydHlDaGFuZ2VEYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cbi8vIGNoYW5naW5nIFRleHRWaWV3IGVkaXRhYmxlIHByb3BlcnR5IHZhbHVlIG9uIGJ1dHRvbiB0YXBcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Vmlld0VkaXRTdGF0ZUNoYW5nZShhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPiBhcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcblxuICAgIGNvbnN0IGVkaXRTdGF0ZSA9IHZtLmdldChcImVkaXRTdGF0ZVwiKTtcbiAgICB2bS5zZXQoXCJlZGl0U3RhdGVcIiwgIWVkaXRTdGF0ZSk7XG4gICAgaWYgKGVkaXRTdGF0ZSkge1xuICAgICAgICB2bS5zZXQoXCJidXR0b25UZXh0XCIsIFwiRW5hYmxlIFRleHRWaWV3XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLnNldChcImJ1dHRvblRleHRcIiwgXCJEaXNhYmxlIFRleHRWaWV3XCIpO1xuICAgIH1cbn1cbi8vIGRpc3BsYXlpbmcgdGhlIFRleHRWaWV3IHRleHQgaW4gYW4gQWxlcnQgZGlhbG9nXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RleHQoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG5cbiAgICBkaWFsb2dzLmFsZXJ0KGBUZXh0OiAke3ZtLmdldChcInR2VGV4dFwiKX1gKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRleHRWaWV3TG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCB0ZXh0VmlldzogVGV4dFZpZXcgPSA8VGV4dFZpZXc+YXJncy5vYmplY3Q7XG4gICAgdGV4dFZpZXcub24oXCJ0ZXh0Q2hhbmdlXCIsIChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3MpO1xuICAgIH0pO1xufVxuLy8gPDwgdGV4dC12aWV3LWJpbmRpbmctY29kZS10c1xuIl19