var trigger_active = document.getElementById('trigger')
trigger_active.addEventListener('click', startModal)
addEventListener('scroll', startModal)

function startModal() {
    const modal_promocao = document.getElementById('modal')
    if (localStorage.modalDisappear != modal_promocao) {
        modal_promocao.classList.add('show')
    
        var close_button = document.getElementsByClassName('close')[0]
        close_button.addEventListener('click', closeModal)
    
        function closeModal() {
            modal_promocao.classList.remove('show')
            var localStorage.modalDisappear = modal_promocao
        }
    }
}
