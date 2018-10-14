const trackercontainer = document.querySelector('.tracker-container')
const tracker = document.querySelector('.tracker');
const trackerLink = document.querySelector('.tracker-link');

document.addEventListener("DOMContentLoaded", function() {
        showFirstItem();

        setTimeout(() => {
                createTrackerItem("We received payment", "17:00PM");

                const element = document.createElement('div');
                element.className = 'container calc-container-lg d-flex align-content-center justify-content-between px-4 py-4 tracker hidden animated height-zero mb-3';

                element.innerHTML = `
        
                <div class="tracker-text">
                    <h5 class="mb-0"><i class="far fa-check mr-2" style="color: #0459C4"></i>We receivd payment</h5>
                </div>
                <div class="tracker-timestamp">
                    <strong>17:02PM</strong>
                </div>
                `;

                trackercontainer.prepend(element);
                element.classList.add('zoomIn');
                element.classList.remove('hidden', 'height-zero')

        }, 2000)


        setTimeout(() => {
                createTrackerItem("We received payment", "17:00PM");

                const element = document.createElement('div');
                element.className = 'container calc-container-lg d-flex align-content-center justify-content-between px-4 py-4 tracker hidden animated height-zero mb-3';

                element.innerHTML = `
        
                <div class="tracker-text">
                    <h5 class="mb-0"><i class="far fa-check mr-2" style="color: #0459C4"></i>Coins sent</h5>
                </div>
                <div class="tracker-timestamp">
                    <strong>17:04PM</strong>
                </div>
                `;

                trackercontainer.prepend(element);
                element.classList.add('zoomIn');
                element.classList.remove('hidden', 'height-zero')
                
                
                setTimeout(()=>{
                    element.classList.add('green');
                    
                    trackerLink.classList.add('slideInUp');
                    trackerLink.classList.remove('hidden');
                    
                    
                }, 1000)

        }, 4000)


        // setTimeout(()=>{
        //     trackerElement.classList.remove('tracker-active');
        //     spinner.children[0].style.color = 'red';
        // }, 2000)
});


function showFirstItem() {
        tracker.classList.add('slideInUp');
        tracker.classList.remove('hidden');
        tracker.classList.add('visible');
}

function createTrackerItem(text, timestamp) {
        const element = document.createElement('div');
        element.className = 'container calc-container-lg d-flex align-content-center justify-content-between px-4 py-4 tracker hidden animated height-zero';

        element.innerHTML = `
        
        <div class="tracker-text">
            <h5 class="mb-0"><i class="far fa-check mr-2" style="color: #0459C4"></i>${text}</h5>
        </div>
        <div class="tracker-timestamp">
            <strong>${timestamp}</strong>
        </div>
        `;
}
