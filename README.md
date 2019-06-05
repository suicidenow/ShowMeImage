# ShowMeImage
SMI is a jQuery function for displaying images from input[type=file]


How to use?

    <input id="files" type="file" accept=".png, .jpg, .jpeg" name="files[]"  multiple="multiple">
    <div class="showHere"></div>

    <script src="your/path/to/js/jquery.js"></script>
    <script src="your/path/to/js/smi.js"></script>
    
    <script>
        $('#files').ShowMeImage('.showHere')
    </script>
    
Result:

    <div class="showHere">
    <div class="attach-file" data-file="image name">
        <img src="data/image code">
        <input type="file" style="display:none;" value="data/image code" name="file-[index of .attach-file block]">
        <div class="attach-file-delete">&times;</div>
    </div>
    </div>
    
    
P.S.

The names just created inputs are generated upon change. If you add four images they will be the names: file-0 file-1 file-2 file-3. If you delete one of the images, the names will be regenerated.
