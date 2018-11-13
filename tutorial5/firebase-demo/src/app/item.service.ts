import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export class Item{
	body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

	items: AngularFireList<Item[]> = null;
	userId: string;

	constructor(private _db: AngularFireDatabase, private _afAuth: AngularFireAuth) {
		this._afAuth.authState.subscribe(user => {
		if(user)
		{
			this.userId = user.uid;
		}
		});
	}

getItemList(): AngularFireList<Item[]>{
	if(!this.userId)
	{
		return;
	}else
	{
		this.items = this._db.list(`items/${this.userId}`);
		
	}
}

}
