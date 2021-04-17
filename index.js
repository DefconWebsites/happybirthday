// Get all the images
image_array = [
    'AKJG5651.JPG',
    'ARKS7604.JPG',
    'CJMO2921.JPG',
    'DKSW6439.JPG',
    'DUJP3546.JPG',
    'EXFV4442.JPG',
    'FUQV5838.JPG',
    'GGTZ7928.JPG',
    'GQGF8547.JPG',
    'HPKI8216.JPG',
    'IMG_0849.JPG',
    'IMG_0855.JPG',
    'IMG_0882.PNG',
    'IMG_E0882.JPG',
    'JHTG9387.JPG',
    'JLLX8706.JPG',
    'JZDW1520.JPG'
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`

    selected_compliment = compliment[random_index];
  
    // Display the text
    document.getElementById('compliment').textContent = selected_compliment;
  }


  
