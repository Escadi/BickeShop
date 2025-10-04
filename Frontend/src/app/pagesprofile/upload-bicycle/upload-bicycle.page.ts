import { Component, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle-service';

@Component({
  selector: 'app-upload-bicycle',
  templateUrl: './upload-bicycle.page.html',
  styleUrls: ['./upload-bicycle.page.scss'],
  standalone: false
})
export class UploadBicyclePage implements OnInit {
  isModalOpen = false;
  bicycle: any[] = [];
  filtered: any[] = [];
  selectedBike: any =[];

  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.getAllBicycles();

  }

  /**--------------------------------------------------------------------------------------
  * |                     FILTER FOR THE BICYCLES ON CASCADE FORM                         | 
  * ---------------------------------------------------------------------------------------
  */
 
  filteredBicycle(event: any) {

    const query = event.target.value.toLowerCase();
    if(!query || query.trim() === ''){
      this.filtered = this.bicycle;
      return;
    }
    this.filtered = this.bicycle.filter((bike) =>
      bike.id.toString().includes(query)||
      bike.brand.toLowerCase().includes(query) ||
      bike.model.toLowerCase().includes(query)
    );
  }

  /**--------------------------------------------------------------------------------------
  * |                               CRUD FOR THE BICYCLES                                 | 
  * ---------------------------------------------------------------------------------------
  */

  getAllBicycles() {
    this.bicycleService.getBicycles().subscribe((response: any) => {
      this.bicycle = response;
      this.filtered = response; // se añade todas en el filtered
    });
  }
  openModal(id: number) {
    // Busca la bicicleta seleccionada por id
    const bike = this.bicycle.find((b) => b.id === id);
    if (bike) {
      // Clonamos para no modificar el original hasta que se pulse "Actualizar"
      this.selectedBike = { ...bike };
      this.isModalOpen = true;
    }
  }
  closeModal() {
    this.isModalOpen = false;

  }
  updateBike(){
    this.bicycleService.update(this.selectedBike).subscribe({
      next: (response) => {
        console.log('Bicicleta actualizada:', response);
        this.getAllBicycles(); // Refresca la lista de bicicletas
        this.closeModal(); // Cierra el modal después de actualizar
      },
      error: (error) => {
        console.error('Error al actualizar la bicicleta:', error);
      }
    });
  }
}
