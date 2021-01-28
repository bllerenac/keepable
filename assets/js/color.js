window.onload = () => {
  const tooltip = document.querySelector('.tooltip');
  tooltip.addEventListener('mouseover', e => {
    const trigger = tooltip.querySelector('.tooltip-trigger');
    const content = tooltip.querySelector('.tooltip-content');
    if(trigger == e.target){
      content.classList.remove('hidden')
    }
  })
  tooltip.addEventListener('mouseleave', e => {
    const content = tooltip.querySelector('.tooltip-content');
    content.classList.add('hidden');
  });
  tooltip.addEventListener('click', e => {
    const triggers = tooltip.querySelectorAll('.tooltip-content a');
    triggers.forEach(trigger => {
      if(trigger == e.target){
        console.log(trigger.textContent);
      }
    })
  })
}