const inputImage = document.getElementById('validatedCustomFile');
const imagePreview = document.getElementById('image-preview');

            inputImage.addEventListener('change', (event) => {
              const file = event.target.files[0];
              const reader = new FileReader();

              reader.onload = (e) => {
                imagePreview.src = e.target.result;
              };

              reader.readAsDataURL(file);
  }
);