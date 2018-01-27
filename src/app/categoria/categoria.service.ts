import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './models';
@Injectable()
export class CategoriaService {
  categoriasCollection: AngularFirestoreCollection<Categoria>;
  private categoriaDoc: AngularFirestoreDocument<Categoria>;
  categorias$: Observable<Categoria[]>;
  constructor(public afs: AngularFirestore) {
    this.categoriasCollection = afs.collection<Categoria>('categorias');
    this.categorias$ = this.categoriasCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Categoria;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getAll() {
    return this.categorias$;
  }
  createCategorias(categoria: Categoria) {
    return this.categoriasCollection.add(categoria);
  }

  removeCategorias(categoria: Categoria) {
    this.categoriaDoc = this.afs.doc(`categorias/${categoria.id}`);
    return this.categoriaDoc.delete();
  }

  updateCategorias(categoria: Categoria) {
    this.categoriaDoc = this.afs.doc(`categorias/${categoria.id}`);
    return this.categoriaDoc.update(categoria);
  }
}
